import {useEffect, useState} from "react";
import {apiHeaders, mikeWilliamsId} from "../../constants.ts";
import {Link} from "react-router-dom";
import "./Posts.css"

type post = {
    id: string
    caption: {
        text: string
    },
    play_count: string,
    video_url: string,
    thumbnail_url: string,
    carousel_media: {
        carousel_parent_id: string, // De ser necesario
        is_video: boolean,
        thumbnail_url: string, // Foto comun a todos
        video_url: string // Presente unicamente si la publicacion es un video
    }[]
}

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [paginationToken, setPaginationToken] = useState("");
    useEffect(() => {
        // fetchData().then(r => {setPosts(r.data.items);}).catch(e => console.error(e));
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

    return (
        <>
            <div className="posts-grid">
                {posts.map((post: post) => (
                    <div key={post.id}>
                        <img src={post.thumbnail_url} alt={"Thumbnail"}/>
                        <p>{post.caption.text}</p>
                        {post.video_url ? (
                            <Link to={`/video/${post.id}`}>Watch Video</Link>
                        ) : post.carousel_media.length > 0 ? (
                            <Link to={`/carousel/${post.id}`}>View Carousel</Link>
                        ) : null}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Posts;