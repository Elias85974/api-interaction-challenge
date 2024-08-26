import React, { useEffect, useState } from 'react';
import {apiHeaders, mikeWilliamsId} from "../../constants.ts";
import "./MikeData.css"

interface BioLink {
    link_id: string;
    url: string;
    title: string;
}

interface MikeDataProps {
    biography: string;
    bio_links: BioLink[];
    follower_count: number;
    following_count: number;
    profile_pic_url: string;
}

const mockData: MikeDataProps = {
    biography: "MGMT: marloes@dma-management.com Bookings: daily@anna-agency.nl 👕: @milliamsclothing Tourdates, tickets, merch and more available here:",
    bio_links: [],
    follower_count: 329825,
    following_count: 1585,
    profile_pic_url: "mike_williams_icon.jpg"
}

const MikeData: React.FC = () => {
    const [mikeData, setMikeData] = useState<MikeDataProps | null>(null);

    useEffect(() => {
        //fetchData().then(r => {setMikeData(r.data);}).catch(e => console.error(e));
    }, [])

    const fetchData = async () => {
        console.log('Fetching Mike info...');
        const response = await fetch(`https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${mikeWilliamsId}&url_embed_safe=true`, {
            method: "GET",
            headers: apiHeaders,
        })
        return await response.json();
    }

    const data = mikeData || mockData;

    return (
        <>
            <img src={data.profile_pic_url} alt="Mike Williams" className="logo"/>
            <h2 className="name">{"Mike Williams"}</h2>
            <p>Followers: {data.follower_count}</p>
            <p>Following: {data.following_count}</p>
            <p className="biography">{data.biography}</p>
        </>
    );
};

export default MikeData;