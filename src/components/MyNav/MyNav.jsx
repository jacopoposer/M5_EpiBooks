

import { useContext } from "react"
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import {ThemeContext} from "../../contexts/ThemeContext"
import { Moon, Sun } from "lucide-react"

const MyNav = ({ inputData, setInputData }) => {

    //stati
  const {isDark, changeTheme}=useContext(ThemeContext)
  const onChangeInput = (e) => {
    setInputData(e.target.value)
  }

  return (
    <Navbar expand="lg" className={isDark ? "bg-dark" : "bg-light"}
    data-bs-theme={isDark ? "dark" : "light"}>
      <Container>
        <Navbar.Brand href="#home">Epibooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Row>
          <Col>


            <input
              type="text"
              value={inputData}
              onChange={onChangeInput}
              placeholder="search your book"
            />

            <Button
            onClick={changeTheme}>
             {isDark ? <Sun/> : <Moon/>}
            </Button>

          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default MyNav