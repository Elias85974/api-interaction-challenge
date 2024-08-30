import React, {useEffect, useState} from "react";
import {apiHeaders, username, post} from "../../constants.ts";
import {Link} from "react-router-dom";
import "./Posts.css"
import {mockData} from "./MockData.ts";

const Posts: React.FC<{username: string}> = ({username: username}) => {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add this line
    const [paginationToken, setPaginationToken] = useState("");
    useEffect(() => {
        fetchData().then(r => {setPosts(r.data.items); setPaginationToken(r.data.pagination_token); setIsLoading(false);}).catch(e => console.error(e));
        },[]);

    const fetchData = async() => {
        let url: string = `https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${username}&url_embed_safe=${true}`;
        if (paginationToken) {
            url += `&pagination_token=${paginationToken}`;
        }
        const response = await fetch(url, {
            method: "GET",
            headers: apiHeaders
        });
        const data = await response.json();
        console.log(data); // Log the entire response
        return data;
    }

    if (isLoading) {
        return <div>Loading...</div>; // Replace this with your loading component
    }

    const data: post[] = posts || mockData.data.items;

    return (
        <>
            <div className="posts-grid">
                {data.map((post: post) => (
                    <Link to={`/user/${username}/moreinfo`} onClick={() => localStorage.setItem("post", JSON.stringify(post))}>
                        <div className="post-thumbnail">
                            <img src={post.thumbnail_url} alt={"Thumbnail"}/>
                            {post.caption.hashtags.length > 0 && (
                                <div className="hashtags">
                                    {post.caption.hashtags.map((hashtag: string, index: number) => (
                                        <span key={index}>#{hashtag} </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Posts;