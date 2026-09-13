import { useContext } from "react"
import { Alert } from "react-bootstrap"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"

const Welcome = () => {

  //context
  const { isDark } = useContext(ThemeContext)
  return (
    <>
      <Alert
        className={`text-center fs-5 mb-0 border-0 rounded-0 ${isDark
            ? "bg-dark text-light"
            : "bg-light text-dark"
          }`}
      >
        Welcome to EpiBooks!
      </Alert>
    </>
  )
}

export default Welcome