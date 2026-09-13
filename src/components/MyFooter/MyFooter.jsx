import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"

const MyFooter = () =>{

        const {isDark} = useContext(ThemeContext)
    return (
       <footer 
    className={`d-flex justify-content-center p-2 mt-auto ${
        isDark ? "bg-dark" : "bg-light"
    }`}
>
            <a className= {`mx-2 text-decoration-none ${isDark ? "text-white" : "text-dark"}`}> Link1 </a>
            <a className={`mx-2 text-decoration-none ${isDark ? "text-white" : "text-dark"}`}> Link2 </a>
            <a className={`mx-2 text-decoration-none ${isDark ? "text-white" : "text-dark"}`}> Link3 </a>
        </footer>
    )
}

export default MyFooter