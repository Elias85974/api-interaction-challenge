import React, { useEffect, useState } from 'react';
import { apiHeaders } from "../../constants.ts";

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
}

const mockData: MikeDataProps = {
    biography: "MGMT: marloes@dma-management.com Bookings: daily@anna-agency.nl 👕: @milliamsclothing Tourdates, tickets, merch and more available here:",
    bio_links: [],
    follower_count: 329825,
    following_count: 1585
}

const MikeData: React.FC = () => {
    const mikeWilliamsId: number = 295424908;
    const [mikeData, setMikeData] = useState<MikeDataProps | null>(null);

    useEffect(() => {
        // fetchData().then(r => {setMikeData(r.data);}).catch(e => console.error(e));
    }, [])

    const fetchData = async () => {
        console.log('Fetching data...'); // Add this line
        const response = await fetch(`https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=${mikeWilliamsId}`, {
            method: "GET",
            headers: apiHeaders,
        })
        return await response.json();
    }

    if (!mikeData) {
        return (
            <div>
                {<img src={"mike_williams_icon.jpg"} alt="Mike Williams" className={"logo"}/>}
                <h1>Mike Williams</h1>
                <p>{mockData.biography}</p>
                <p>Followers: {mockData.follower_count}</p>
                <p>Following: {mockData.following_count}</p>
            </div>
        )
    }
    else {
        return (
            <div>
                {<img src={"mike_williams_icon.jpg"} alt="Mike Williams" className={"logo"}/>}
                <h1>Mike Williams</h1>
                <p>{mikeData.biography}</p>
                <p>Followers: {mikeData.follower_count}</p>
                <p>Following: {mikeData.following_count}</p>
            </div>
        );
    }
};

export default MikeData;