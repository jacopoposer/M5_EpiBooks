import { useContext } from "react"
import { Button, Card, CardFooter, Col } from "react-bootstrap"
import { ThemeContext } from "../../contexts/ThemeContext"
import { useNavigate } from "react-router-dom"

const SingleBook = ({ book, setSelectedBook, selectedBook, isDetail=false }) => {

    //context
    const { isDark } = useContext(ThemeContext)

    //navigate
    const navigate = useNavigate()

    //funzioni
    const selectCard = () => {
        setSelectedBook(selectedBook === book.asin ? "" : book.asin)
    }

    const detailCard = () => {
        navigate(`/${book.asin}`)
    }

    return (
        <Col
         
            xs={12}
            sm={6}
            md={4}
            lg={3}>
            <Card
                className={`h-100 d-flex flex-column 
    ${selectedBook === book.asin ? "border-danger border-2" : ""}
    ${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
            data-testid="BookCard">
                <Card.Img
                    variant="top"
                    src={book.img}
                    className="object-fit-cover h-50"
                />
                <Card.Body className="d-flex flex-column justify-content-between ps-2">

                    <Card.Title className='card-title fs-6'>{book.title}</Card.Title>
                    <Card.Text className="fw-medium fs-6">{book.price} $</Card.Text>
                    <Card.Text>{book.category}</Card.Text>
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