import { Col, Container, Row } from "react-bootstrap"
import AllTheBooks from "../AllTheBooks/AllTheBooks"
import CommentArea from "../CommentArea/CommentArea"
import { useState } from "react"

const Main = ({ inputData }) => {
    //stato
    const [selectedBook, setSelectedBook] = useState("")
    return (
        <Container>
            <Row>
                <Col md={selectedBook ? 8 : 12}>
                    <AllTheBooks
                        inputData={inputData}
                        selectedBook={selectedBook}
                        setSelectedBook={setSelectedBook} />
                </Col>
                {selectedBook && (
                    <Col md={4}>
                        <CommentArea selectedBook={selectedBook} />
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default Main