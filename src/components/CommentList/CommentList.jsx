import SingleComment from "../SingleComment/SingleComment"

const CommentsList = ({ comments }) => {

    return (
        <>
            {comments.map((comment) => (
                <SingleComment
                    key={comment._id}
                    comment={comment}
                />
            ))}
        </>
    )
}

export default CommentsList