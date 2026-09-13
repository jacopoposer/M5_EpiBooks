import { useEffect, useContext } from "react"
import { Alert, Button, Card, Spinner } from "react-bootstrap"
import CommentsList from "../CommentList/CommentList"
import AddComment from "../AddComment/AddComment"
import { CommentsContext } from "../../contexts/CommentsContext/CommentContexts"
import CommentNotificationsToast from "../CommentNotificationToast/CommentNotificationToast"
import { MessageCircle, X } from "lucide-react"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"

const CommentArea = ({ selectedBook, setSelectedBook, isDetail = false }) => {

    const { comments, isLoading, getComments, getCommentsError } = useContext(CommentsContext)
    const { isDark } = useContext(ThemeContext)


    const closeComments = () => {
        setSelectedBook("")
    }

    useEffect(() => {
        if (selectedBook !== "") {
            getComments(selectedBook)
        }
    }, [selectedBook])



    return (
        <>
            <CommentNotificationsToast />
            <Card
                className={`h-100 ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
                data-testid="CommentTest"
            >
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">
                        Reviews
                    </Card.Title>

                    {!isDetail && (
                        <Button
                            variant="link"
                            className="text-secondary p-0"
                            onClick={closeComments}
                        >
                            <X size={22} />
                        </Button>
                    )}
                </Card.Header>

                <Card.Body className="p-4">
                    {isLoading ? (
                        <div className="text-center py-4">
                            <Spinner animation="border" variant="info" />
                        </div>

                    ) : getCommentsError ? (
                        <Alert variant="danger">
                            {getCommentsError}
                        </Alert>

                    ) : comments.length === 0 ? (
                        <div className="text-center py-5">
                            <MessageCircle
                                size={36}
                                className="mb-3 text-secondary"
                            />

                            <p className="fw-semibold mb-1">
                                No reviews yet
                            </p>

                            <p className="text-secondary mb-0">
                                Be the first to leave a review
                            </p>
                        </div>

                    ) : (
                        <CommentsList comments={comments} />
                    )}

                    {!getCommentsError && (
                        <AddComment asin={selectedBook} />
                    )}
                </Card.Body>
            </Card>
        </>

    )
}

export default CommentArea
