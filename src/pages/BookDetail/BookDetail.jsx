import { useParams } from "react-router-dom"
import books from "../../books/history.json"
import { useEffect, useState } from "react"
import SingleBook from "../../components/SingleBook/SingleBook"
import CommentArea from "../../components/CommentArea/CommentArea"

const BookDetail = () => {

   const {asin} = useParams()

   const [book, setBook] = useState()

    useEffect(() => {
        setBook(books.find(book=>book.asin===asin))
    },[asin])

    return (
        <>
            {book && 
            <>
            <SingleBook
            book={book}
            isDetail={true}
            />
            <CommentArea
            selectedBook={asin}/>
            </>}
            
        </>
    )
}

export default BookDetail