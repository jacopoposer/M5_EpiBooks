import { useContext, useState } from "react"
import { Badge, Button, Card } from "react-bootstrap"
import EditComment from "../EditComment/EditComment"
import { CommentsContext } from "../../contexts/CommentsContext/CommentContexts"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"

const SingleComment = ({ comment }) => {
    //context    
    const { deleteComment } = useContext(CommentsContext)
    const {isDark} = useContext(ThemeContext)
   
    //stati
    const [isEditing, setIsEditing] = useState(false)

    //funzioni
    const onEditing = () => {
        setIsEditing(!isEditing)
    }

    const deleteCommentOnClick = ()=> {
        deleteComment(comment._id)
    }

    return (
        <Card
            className={`mb-3 shadow-sm border-0 ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
            data-testid="CommentCard">
            <Card.Body className="p-3">
                <Card.Text className="mb-3 fs-5">
                    {comment.comment}
                </Card.Text>

                <div className="d-flex justify-content-between align-items-center">
                    <Badge bg="info">
                        Rate: {comment.rate} / 5
                    </Badge>

                    <div className="d-flex gap-2">
                        <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={deleteCommentOnClick}
                        >
                            Delete
                        </Button>

                    <Button
                        variant="info"
                        size="sm"
                        onClick={onEditing}
                    >
                        Edit
                    </Button>
                </div>
            </div>
            {isEditing && (
                <EditComment comment={comment} />
            )}
        </Card.Body>
        </Card >
    )
}

export default SingleComment