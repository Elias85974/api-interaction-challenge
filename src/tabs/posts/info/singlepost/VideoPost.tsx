const VideoPost = ({ post }) => {
    return (
        <>
            <video src={post.video_url} loop autoPlay controls muted/>
            <div className="post-info">
                <p>{post.caption.text} Comments: {post.comment_count}</p>
                <p>Likes: {post.like_count} {post.play_count && <>Plays: {post.play_count}</>} </p>
            </div>
        </>
    )
}

export default VideoPost;