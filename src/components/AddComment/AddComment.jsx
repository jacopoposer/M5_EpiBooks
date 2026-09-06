import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"

const AddComment = ({ asin }) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGVhNTIxMDU5ZjAwMTVlMjNhMGMiLCJpYXQiOjE3ODg0NTgwOTIsImV4cCI6MTc4OTY2NzY5Mn0.M6z0meFQqBHSGGyB320gjp7QXlmqaX_7yca7KvRKTfk"

    //stati
    const [inputComment, setInputComment] = useState({
        comment: "",
        rate: "1",
        elementId: asin
    })

    //events
    const onChangeInput = (e) => {
        const { name, value } = e.target

        setInputComment({
            ...inputComment,
            [name]: value
        })
    }

    
   useEffect(() => {
    setInputComment({
        comment: "",
        rate: "1",
        elementId: asin
    })
}, [asin])


    const addReview = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(inputComment)
                })
                return await response.json()
            } catch (error) {
                console.error(error)
        }}
        
    

return (
    <Form
        onSubmit={addReview}
        className="mt-3 p-2 w-100"
    >
        <Form.Group className="d-flex flex-column gap-2 w-100">

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
            >
                Send Review
            </Button>

        </Form.Group>
    </Form>
)
}

export default AddComment