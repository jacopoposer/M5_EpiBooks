import { Alert, Container, Row } from "react-bootstrap"
import books from "../../books/history.json"
import SingleBook from "../SingleBook/SingleBook"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"


const AllTheBooks = ({ inputData, setSelectedBook, selectedBook }) => {
    //stati
    const [booksData, setBooksData] = useState(books)
    const [isSearchEmpty, setIsSearchEmpty] = useState(false)
    const { isDark } = useContext(ThemeContext)
   
   
    //filtro
    useEffect(() => {
        const filtered = books.filter(singleBook =>
            singleBook.title.toLowerCase().includes(inputData.trim().toLowerCase())
        )
        setBooksData(filtered)

        if (filtered.length === 0) {
            setIsSearchEmpty(true)
        } else {
            setIsSearchEmpty(false)
        }

    }, [inputData])


    return (
        <Container
            fluid
            className={`py-4 ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
        >

            <Row className="g-4">
                {isSearchEmpty && (
                    <Alert
                        variant="warning">
                        There are no books on this search
                    </Alert>
                )}
                {booksData.map((book) =>
                    <SingleBook
                        key={book.asin}
                        book={book}
                        selectedBook={selectedBook}
                        setSelectedBook={setSelectedBook}
                    />
                )}
            </Row>
        </Container>
    )
}

export default AllTheBooks