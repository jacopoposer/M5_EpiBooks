import { useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { CommentsContext } from "../../contexts/CommentsContext/CommentContexts"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"

const EditComment = ({ comment }) => {
    //context
    const {editComment} = useContext(CommentsContext)
    const {isDark} = useContext(ThemeContext)

    //stati
    const [editedComment, setEditedComment] = useState({
        comment: comment.comment,
        rate: comment.rate,
        elementId: comment.elementId
    })

    //funzioni
    const onChangeInput = (e) => {
        const { name, value } = e.target

       setEditedComment(prev => ({
    ...prev,
    [name]: value
}))
    }

    const submitEditComment = async (e) =>{
        e.preventDefault()
        await editComment(comment._id, editedComment)
    }

   

    return (
        <Form
            onSubmit={submitEditComment}
            className="mt-3 p-2 w-100"
        >
            <Form.Group 
            className="d-flex flex-column gap-2 w-100"
            data-bs-theme= {isDark ? "dark" : "light"}
            >

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