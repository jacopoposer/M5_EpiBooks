import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const EditComment = ({ comment }) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGVhNTIxMDU5ZjAwMTVlMjNhMGMiLCJpYXQiOjE3ODg0NTgwOTIsImV4cCI6MTc4OTY2NzY5Mn0.M6z0meFQqBHSGGyB320gjp7QXlmqaX_7yca7KvRKTfk"

    //stati
    const [editedComment, setEditedComment] = useState({
        comment: comment.comment,
        rate: comment.rate,
        elementId: comment.elementId
    })

    //funzioni
    const onChangeInput = (e) => {
        const { name, value } = e.target

        setEditedComment({
            ...editedComment,
            [name]: value
        })
    }

    //fetch PUT

    const editComment = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(editedComment)
                }
            )

            return await response.json()

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Form
            onSubmit={editComment}
            className="mt-3 p-2 w-100"
        >
            <Form.Group className="d-flex flex-column gap-2 w-100">

                <Form.Control
                    className="w-100"
                    value={editedComment.comment}
                    onChange={onChangeInput}
                    type="text"
                    placeholder="Inserisci il tuo commento..."
                    name="comment"
                />

                <Form.Control
                    className="w-100"
                    value={editedComment.rate}
                    onChange={onChangeInput}
                    type="number"
                    min="1"
                    max="5"
                    name="rate"
                />

                <Button
                    type="submit"
                    className="mt-2 w-100 fw-bold"
                    variant="info"
                >
                    Change Comment
                </Button>

            </Form.Group>
        </Form>

    )
}

export default EditComment