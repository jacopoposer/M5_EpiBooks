import { useContext } from "react"
import { Badge, Button, Card, CardFooter, Col } from "react-bootstrap"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"
import { useNavigate } from "react-router-dom"


const SingleBook = ({ book, setSelectedBook, selectedBook, isDetail = false }) => {

    //context
    const { isDark } = useContext(ThemeContext)

    //navigate
    const navigate = useNavigate()

    //funzioni
    const selectCard = () => {
        setSelectedBook(selectedBook === book.asin ? "" : book.asin)
    }

    const detailCard = () => {
        navigate(`/book/${book.asin}`)
    }

    return (
        <Col
            xs={12}
            sm={isDetail ? 12 : 6}
            md={isDetail ? 12 : 4}
            lg={isDetail ? 12 : 3}
        >
            <Card
                className={`h-100 d-flex flex-column
                             ${isDark ? "bg-dark text-light" : "bg-light text-dark"}
                             ${selectedBook === book.asin
                        ? "border-danger border-2"
                        : isDark
                            ? "border-secondary border-2"
                            : ""
                    }
                 `}
                data-testid="BookCard"
            >

                <Card.Img
                    variant="top"
                    src={book.img}
                    className="book-cover"
                />

                <Card.Body className="d-flex flex-column ps-2 justify-content-between">
                    <Card.Title className="book-title fs-6">
                        {book.title}
                    </Card.Title>

                    <div className="d-flex align-items-center gap-2 mb-3">
                        <Badge bg="info" className="text-dark">
                            Price
                        </Badge>

                        <span>
                            {book.price} $
                        </span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <Badge bg="info" className="text-dark">
                            Category
                        </Badge>

                        <span className="text-capitalize">
                            {book.category}
                        </span>
                    </div>
                </Card.Body>
                {!isDetail && <CardFooter
                    className="d-flex flex-column justify-content-between ps-2"
                >
                    <Button
                        className="text-white"
                        variant='info'
                        onClick={selectCard}
                        data-testid="ReviewsButtonTest"
                    >
                        Reviews
                    </Button>
                    <Button
                        className="text-white my-2"
                        variant="info"
                        onClick={detailCard}

                    >
                        Details
                    </Button>
                </CardFooter>}

            </Card>
        </Col>

    )
}

export default SingleBook