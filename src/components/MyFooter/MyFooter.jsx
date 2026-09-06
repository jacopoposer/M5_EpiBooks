import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

const MyFooter = () =>{

        const {isDark} = useContext(ThemeContext)
    return (
       <footer 
    className={`d-flex justify-content-center p-2 mt-auto ${
        isDark ? "bg-dark text-light" : "bg-light text-dark"
    }`}
>
            <a className="mx-2 text-decoration-none text-dark"> Link1 </a>
            <a className="mx-2 text-decoration-none text-dark"> Link2 </a>
            <a className="mx-2 text-decoration-none text-dark"> Link3 </a>
        </footer>
    )
}

export default MyFooter