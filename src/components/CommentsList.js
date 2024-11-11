const CommentsList = ({ comments }) => {
    return (
        <>
        <h3>Comments:</h3>
        {comments.map(comment => (
            <div key={comments.postedBy+': '+comments.text} className="comment">
                <h4>{comment.postedBy}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
        </>
    )
};

export default CommentsList;