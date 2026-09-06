import { useState } from "react"
import { Badge, Button, Card } from "react-bootstrap"
import EditComment from "../EditComment/EditComment"

const SingleComment = ({ comment }) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGVhNTIxMDU5ZjAwMTVlMjNhMGMiLCJpYXQiOjE3ODg0NTgwOTIsImV4cCI6MTc4OTY2NzY5Mn0.M6z0meFQqBHSGGyB320gjp7QXlmqaX_7yca7KvRKTfk"

    //stati
    const [isEditing, setIsEditing] = useState(false)

    //funzioni
    const onEditing = () => {
        setIsEditing(!isEditing)
    }

    // delete fetch
    const deleteComment = async () => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            return await response.json()

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Card className="mb-3 shadow-sm border-0">
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
                            onClick={deleteComment}
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
        </Card>
    )
}

export default SingleComment