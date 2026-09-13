import { useContext } from "react"
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"
import { Moon, Sun } from "lucide-react"
import { Link } from "react-router-dom"
const MyNav = ({ inputData, setInputData, showSearch=true }) => {

  //stati
  const { isDark, changeTheme } = useContext(ThemeContext)
  const onChangeInput = (e) => {
    setInputData(e.target.value)
  }

  return (
    <Navbar expand="lg" className={isDark ? "bg-dark" : "bg-light"}
      data-bs-theme={isDark ? "dark" : "light"}>
      <Container>
        <Link to="/" className="navbar-brand">
          Epibooks
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link"> Home</Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Row>
    <Col className="d-flex align-items-center gap-2">

        {showSearch && (
            <input
                type="text"
                value={inputData}
                onChange={onChangeInput}
                placeholder="search your book"
                data-testid="SearchInput"
            />
        )}

        <Button onClick={changeTheme}>
            {isDark ? <Sun /> : <Moon />}
        </Button>

    </Col>
</Row>
      </Container>
    </Navbar>
  )
}

export default MyNav