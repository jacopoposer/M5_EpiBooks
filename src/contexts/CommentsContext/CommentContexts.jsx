import { createContext, useState } from "react"

export const CommentsContext = createContext()

export const CommentsProvider = ({ children }) => {
    //costanti
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGVhNTIxMDU5ZjAwMTVlMjNhMGMiLCJpYXQiOjE3ODg0NTgwOTIsImV4cCI6MTc4OTY2NzY5Mn0.M6z0meFQqBHSGGyB320gjp7QXlmqaX_7yca7KvRKTfk"


    //stati
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentAsin, setCurrentAsin] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [getCommentsError, setGetCommentsError] = useState("")

    //fetch
    const getComments = async (asin) => {
        setCurrentAsin(asin)
        setIsLoading(true)
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
             if (response.ok) {
            const data = await response.json()
            setComments(data)
        } else {
            setGetCommentsError("Unable to load reviews")
        }
        } catch (e) {
            console.log(e)
        setGetCommentsError("Unable to load reviews")
        } finally {
            setIsLoading(false)
        }
    }

    //chiamata POST per aggiungere nuovo commento
    const addReview = async (inputComment) => {
        setIsSubmitting(true)

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
            if (response.ok) {
                await response.json()
                await getComments(currentAsin)
                setSuccessMessage("Review added successfully")
                setErrorMessage("")
            } else {
                setErrorMessage("Something went wrong")
                setSuccessMessage("")
            }
        } catch (error) {
            console.error(error)
            setErrorMessage("Something went wrong")
            setSuccessMessage("")
        } finally {
            setIsSubmitting(false)
        }
    }

    // delete fetch
    const deleteComment = async (commentId) => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            if (response.ok) {
                await getComments(currentAsin)

                setSuccessMessage("Review deleted successfully")
                setErrorMessage("")
            } else {
                setErrorMessage("Something went wrong while deleting the review")
                setSuccessMessage("")
            }

        } catch (error) {
            console.error(error)

            setErrorMessage("Something went wrong while deleting the review")
            setSuccessMessage("")
        }
    }

    //fetch PUT

    const editComment = async (commentId, editedComment) => {

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(editedComment)
                }
            )

            if (response.ok) {
                await response.json()
                await getComments(currentAsin)

                setSuccessMessage("Review updated successfully")
                setErrorMessage("")
            } else {
                setErrorMessage("Something went wrong while updating the review")
                setSuccessMessage("")
            }
        } catch (error) {
            console.error(error)
            
            setErrorMessage("Something went wrong while updating the review")
            setSuccessMessage("")
        }
    }


    return (
        <CommentsContext.Provider
            value={{
                comments,
                setComments,
                isLoading,
                setIsLoading,
                getComments,
                addReview,
                deleteComment,
                editComment,
                isSubmitting,
                successMessage,
                setSuccessMessage,
                errorMessage,
                setErrorMessage,
                getCommentsError
            }}
        >
            {children}
        </CommentsContext.Provider>
    )
}