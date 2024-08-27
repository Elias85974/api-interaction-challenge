import {useEffect, useState} from "react";
import {apiHeaders, mikeWilliamsId, post} from "../../constants.ts";
import {Link} from "react-router-dom";
import "./Posts.css"
import {postData} from "../PostData.ts";

const Posts = () => {
    const [posts, setPosts] = useState(null);
    const [paginationToken, setPaginationToken] = useState("");
    useEffect(() => {
        // fetchData().then(r => {setPosts(r.data.items); setPaginationToken(r.data.pagination_token);}).catch(e => console.error(e));
        },[]);

    const fetchData = async() => {
        let url: string = `https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${mikeWilliamsId}&url_embed_safe=true`;
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

    const data: post[] = posts || postData.data.items;

    return (
        <>
            <div className="posts-grid">
                {data.map((post: post) => (
                    <Link to={`/moreinfo`} onClick={() => localStorage.setItem("post", JSON.stringify(post))}>
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