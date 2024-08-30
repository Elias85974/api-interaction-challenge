import React, { useEffect, useState } from 'react';
import { apiHeaders } from "../../../constants.ts";
import "./UserData.css";
import GoBackButton from "../../../component/GoBackButton.tsx";

interface BioLink {
    link_id: string;
    url: string;
    title: string;
}

interface UserDataProps {
    biography: string;
    bio_links: BioLink[];
    follower_count: number;
    following_count: number;
    profile_pic_url: string;
    ads_page_name: string;
}

const mockData: UserDataProps = {
    biography: "MGMT: marloes@dma-management.com Bookings: daily@anna-agency.nl 👕: @milliamsclothing Tourdates, tickets, merch and more available here:",
    bio_links: [],
    follower_count: 329825,
    following_count: 1585,
    profile_pic_url: "mike_williams_icon.jpg",
    ads_page_name: "Mike Williams"
}

const UserData: React.FC<{username: string}> = ({ username: username }) => {
    const [userData, setUserData] = useState<UserDataProps | null>(null);

    useEffect(() => {
        if (username) {
            fetchData(username).then(r => setUserData(r.data)).catch(e => console.error(e));
        }
    }, [username]);

    const fetchData = async (username: string) => {
        console.log('Fetching user info...');
        const response = await fetch(`https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${username}&url_embed_safe=true`, {
            method: "GET",
            headers: apiHeaders,
        });
        return await response.json();
    }

    const data = userData || {
        biography: "",
        bio_links: [],
        follower_count: 0,
        following_count: 0,
        profile_pic_url: "",
        ads_page_name: username || "Unknown User"
    };

    return (
        <>
            <div className={"button_position"}>
                <GoBackButton />
            </div>
            <div>
                <img src={data.profile_pic_url} alt="User Profile" className="logo" />
                <h2 className="name">{data.ads_page_name}</h2>
                <p>Followers: {data.follower_count}</p>
                <p>Following: {data.following_count}</p>
                <p className="biography">{data.biography}</p>
            </div>
        </>
    );
};

export default UserData;
