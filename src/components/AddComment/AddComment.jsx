import { useContext, useEffect, useState } from "react"
import { Toast, ToastContainer, Button, Form } from "react-bootstrap"
import { CommentsContext } from "../../contexts/CommentsContext/CommentContexts"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"

const AddComment = ({ asin }) => {
    //costanti
    const initialComment = {
        comment: "",
        rate: "1",
        elementId: asin
    }

    //stati
    const [inputComment, setInputComment] = useState(initialComment)

    //context
    const { addReview,
        isSubmitting,
        setErrorMessage,
        setSuccessMessage
    } = useContext(CommentsContext)
    const {isDark} = useContext(ThemeContext)

    //events
    const onChangeInput = (e) => {
        const { name, value } = e.target

        setInputComment(prev => ({
            ...prev,
            [name]: value
        }))
    }


    useEffect(() => {
        setInputComment(initialComment)
    }, [asin])


    const onSubmitComment = async (e) => {
        e.preventDefault()

        if (inputComment.comment.trim() === "") {
            setErrorMessage("Please write a review before sending")
            setSuccessMessage("")
            return
        }

        await addReview(inputComment)
        setInputComment(initialComment)
    }


    return (
        <Form
            onSubmit={onSubmitComment}
            className="mt-3 p-2 w-100"
        >
            <Form.Group 
            className="d-flex flex-column gap-2 w-100"
            data-bs-theme = {isDark ? "dark" : "light"} >

                <Form.Control
                    className="w-100"
                    value={inputComment.comment}
                    onChange={onChangeInput}
                    type="text"
                    placeholder="Inserisci il tuo commento..."
                    name="comment"
                />

                <Form.Control
                    className="w-100"
                    value={inputComment.rate}
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
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Review"}
                </Button>

            </Form.Group>
        </Form>
    )
}

export default AddComment