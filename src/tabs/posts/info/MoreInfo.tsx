import { useEffect, useState } from "react";
import {post} from "../../../constants.ts";
import "./MoreInfo.css";

const MoreInfo = () => {
    const [post, setPost] = useState<post | null>(null);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        const getPost = localStorage.getItem("post");
        if (!getPost) {
            throw new Error("No post found");
        }
        else {
            setPost(JSON.parse(getPost));
        }
    }, []);

    return (
        <div className="post-container">
            {post && (
                <>
                    {post.video_url ? (
                        <video src={post.video_url} loop autoPlay controls/>
                    ) : (
                        <img src={post.thumbnail_url} alt="Post thumbnail"/>
                    )}
                    <button onClick={() => setShowInfo(true)}>Show More Info</button>
                    {showInfo && (
                        <div className="modal">
                            <div className="post-info">
                                <p>Caption: {post.caption.text}</p>
                                <p>Comments: {post.comment_count}</p>
                                <p>Likes: {post.like_count}</p>
                                <p>Plays: {post.play_count}</p>
                            </div>
                            <button onClick={() => setShowInfo(false)}>Close</button>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default MoreInfo;