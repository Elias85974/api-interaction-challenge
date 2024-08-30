import { useEffect, useState } from "react";
import {post} from "../../../constants.ts";
import "./MoreInfo.css";
import VideoPost from "./singlepost/VideoPost";
import PostCarousel from "./singlepost/Carrousel.tsx";
import GoBackButton from "../../../component/GoBackButton.tsx";

const MoreInfo = () => {
    const [post, setPost] = useState<post | null>(null);

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
                    {!post.carousel_media? (
                        <VideoPost post={post} />
                    ) : (
                        <PostCarousel post={post} />
                    )}
                    <GoBackButton />
                </>
            )}
        </div>
    )
}

export default MoreInfo;