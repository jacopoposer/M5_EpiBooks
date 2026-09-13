import { Navigate, useParams } from "react-router-dom"
import history from "../../books/history.json"
import fantasy from "../../books/fantasy.json"
import horror from "../../books/horror.json"
import romance from "../../books/romance.json"
import scifi from "../../books/scifi.json"
import SingleBook from "../../components/SingleBook/SingleBook"
import CommentArea from "../../components/CommentArea/CommentArea"
import MyNav from "../../components/MyNav/MyNav"
import MyFooter from "../../components/MyFooter/MyFooter"
import { Col, Container, Row } from "react-bootstrap"

const BookDetail = () => {

    const { asin } = useParams()
    const books = [
    ...history,
    ...fantasy,
    ...horror,
    ...romance,
    ...scifi
    ]


    const book = books.find(book => book.asin === asin)

     if (!book) {
        return <Navigate to="/not-found" replace />
    }
    
    return (
        <>
        <MyNav showSearch={false} />
            {book && (
                <Container className="py-4">
                    <Row className="g-4">
                        <Col md={6}>
                            <SingleBook
                                book={book}
                                isDetail={true}
                            />
                        </Col>

                        <Col md={6}>
                            <CommentArea
                                selectedBook={asin}
                                isDetail={true}
                            />
                        </Col>
                    </Row>
                </Container>
            )}
            <MyFooter />
        </>
    )
}

export default BookDetail