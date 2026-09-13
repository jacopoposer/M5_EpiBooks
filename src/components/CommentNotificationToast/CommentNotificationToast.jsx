import { useContext } from "react"
import { Toast, ToastContainer } from "react-bootstrap"
import { CommentsContext } from "../../contexts/CommentsContext/CommentContexts"

const CommentNotificationsToast =() => {

    const {successMessage,
         setSuccessMessage,
        errorMessage,
        setErrorMessage
    } = useContext(CommentsContext)

    return (
        <ToastContainer
                position="top-end"
                className="p-3"
                style={{ position: "fixed", zIndex: 9999  }}
            >
                <Toast
                    show={successMessage !== ""}
                    onClose={() => setSuccessMessage("")}
                    delay={2500}
                    autohide
                    bg="success"
                >
                    <Toast.Body className="text-white">
                        {successMessage}
                    </Toast.Body>
                </Toast>

                <Toast
                    show={errorMessage !== ""}
                    onClose={() => setErrorMessage("")}
                    delay={4000}
                    autohide
                     bg="danger"
                >
                    <Toast.Body  className="text-white">
                        {errorMessage}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
    )
}

export default CommentNotificationsToast