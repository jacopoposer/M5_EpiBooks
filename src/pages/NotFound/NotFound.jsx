import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"
import MyNav from "../../components/MyNav/MyNav"
import MyFooter from "../../components/MyFooter/MyFooter"
import { Button, Container } from "react-bootstrap"


const NotFound = () => {
    const navigate = useNavigate()
    const { isDark } = useContext(ThemeContext)

    const backToHome = () => {
        navigate("/")
    }
    return (
        <>
            <MyNav showSearch={false}/>
            <Container
                className={`min-vh-100 d-flex flex-column justify-content-center align-items-center text-center ${isDark ? "text-light" : "text-dark"
                    }`}
            >
                <h1 className="display-1 fw-bold">404</h1>

                <h2 className="mb-3">
                    Page not found
                </h2>

                <p className="mb-4">
                    The page you are looking for does not exist.
                </p>

                <Button
                    variant="info"
                    onClick={backToHome}
                >
                    Back to Home
                </Button>
            </Container>
            <MyFooter />
        </>

    )
}

export default NotFound