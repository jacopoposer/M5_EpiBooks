import { Col, Container, Form, Row } from "react-bootstrap"
import AllTheBooks from "../AllTheBooks/AllTheBooks"
import CommentArea from "../CommentArea/CommentArea"
import { useState } from "react"

const Main = ({ inputData }) => {
    //stato
    const [selectedBook, setSelectedBook] = useState("")

    const [selectedCategory, setSelectedCategory] = useState("history")

    const onChangeCategory = (e) => {
        setSelectedCategory(e.target.value)
    }
    return (

        <Container className="mt-3">
            <div className="d-flex justify-content-end align-items-center gap-2 my-3 mb-4">
                <Form.Label className="mb-0 fw-semibold">
                    Select category:
                </Form.Label>

                <Form.Select
                    value={selectedCategory}
                    onChange={onChangeCategory}
                    className="w-auto"
                    aria-label="Select book category"
                >
                    <option value="history">History</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="scifi">Sci-Fi</option>
                </Form.Select>
            </div>
            <Row>
                <Col md={selectedBook ? 8 : 12}>
                    <AllTheBooks
                        inputData={inputData}
                        selectedBook={selectedBook}
                        setSelectedBook={setSelectedBook}
                        selectedCategory={selectedCategory}
                    />
                </Col>
                {selectedBook && (
                    <Col md={4}>
                        <CommentArea
                            selectedBook={selectedBook}
                            setSelectedBook={setSelectedBook} />
                    </Col>
                )}
            </Row>
        </Container>

    )
}

export default Main