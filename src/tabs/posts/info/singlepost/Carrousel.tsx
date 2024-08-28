import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carrousel.css";
import { useState, useRef, useCallback } from "react";

const PostCarousel = ({ post }) => {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const pauseAllVideos = useCallback(() => {
        videoRefs.current.forEach((video, index) => {
            if (video && !video.paused) {
                video.pause();
            }
        });
    }, []);

    const handleSlideChange = (index: number) => {
        pauseAllVideos();
    };

    const handleVideoClick = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };

    const handleVideoRef = (el: HTMLVideoElement | null, index: number) => {
        if (el) {
            videoRefs.current[index] = el;
        }
    };

    return (
        <div className="carousel-wrapper">
            <div className="carousel-container">
                <Carousel
                    infiniteLoop
                    useKeyboardArrows
                    autoPlay
                    showIndicators={true}
                    showThumbs={false}
                    showArrows={true}   // Ensure arrows are visible
                    swipeable={true}    // Enable swiping
                    onChange={handleSlideChange}
                >
                    {post.carousel_media.map((media, index) => (
                        media.is_video ? (
                            <div key={index} onClick={() => handleVideoClick(index)}>
                                <video
                                    ref={el => handleVideoRef(el, index)}
                                    src={media.video_url}
                                    loop
                                    controls
                                    muted
                                />
                            </div>
                        ) : (
                            <div key={index}>
                                <img src={media.thumbnail_url} alt="Carousel media" />
                            </div>
                        )
                    ))}
                </Carousel>
            </div>
            <div className="details-container">
                <div className="post-info">
                    <p>{post.caption.text}</p>
                    <p>Comments: {post.comment_count}</p>
                    <p>Likes: {post.like_count}</p>
                    {post.play_count && <p>Plays: {post.play_count}</p>}
                </div>
                <div className="hint-container">
                    <p className="hint-text">Click and use the arrows to slide through the posts</p>
                </div>
            </div>
        </div>
    );
};

export default PostCarousel;
