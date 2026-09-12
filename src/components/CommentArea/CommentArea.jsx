import { useEffect, useState } from "react"
import { Card, Spinner } from "react-bootstrap"
import CommentsList from "../CommentList/CommentList"
import AddComment from "../AddComment/AddComment"

const CommentArea = ({  selectedBook }) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGVhNTIxMDU5ZjAwMTVlMjNhMGMiLCJpYXQiOjE3ODg0NTgwOTIsImV4cCI6MTc4OTY2NzY5Mn0.M6z0meFQqBHSGGyB320gjp7QXlmqaX_7yca7KvRKTfk"

    //stati
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    //fetch
    const getComments = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${selectedBook}/comments/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            const data = await response.json()
            setComments(data)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
    if (selectedBook !== "") {
        getComments()
    }
}, [selectedBook])



   return (
    <Card className="h-100"
    data-testid="CommentTest">
        <Card.Header>
            <Card.Title className="mb-0">
                Reviews
            </Card.Title>
        </Card.Header>

        <Card.Body className="p-4">
            {isLoading ? (
                <div className="text-center py-4">
                    <Spinner animation="border" variant="info" />
                </div>
            ) : (
                <CommentsList comments={comments} />
            )}

            <AddComment asin={selectedBook} />
        </Card.Body>
    </Card>
)
}

export default CommentArea
