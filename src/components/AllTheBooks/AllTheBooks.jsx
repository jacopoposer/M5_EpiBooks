import { Alert, Container, Row } from "react-bootstrap"
import history from "../../books/history.json"
import fantasy from "../../books/fantasy.json"
import horror from "../../books/horror.json"
import romance from "../../books/romance.json"
import scifi from "../../books/scifi.json"
import SingleBook from "../SingleBook/SingleBook"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"


const AllTheBooks = ({ inputData, setSelectedBook, selectedBook, selectedCategory}) => {
  
    const categories = {
    history,
    fantasy,
    horror,
    romance,
    scifi
}
  
    //stati
    const [booksData, setBooksData] = useState(history)
    const [isSearchEmpty, setIsSearchEmpty] = useState(false)
    const { isDark } = useContext(ThemeContext)
   
   
    //filtro
    useEffect(() => {

        const selectedBooks = categories[selectedCategory]

        const filtered = selectedBooks.filter(singleBook =>
            singleBook.title.toLowerCase().includes(inputData.trim().toLowerCase())
        )
        
        setBooksData(filtered)

        if (filtered.length === 0) {
            setIsSearchEmpty(true)
        } else {
            setIsSearchEmpty(false)
        }

    }, [inputData, selectedCategory])


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