import MyFooter from "../../components/MyFooter/MyFooter"
import MyNav from "../../components/MyNav/MyNav"
import Welcome from "../../components/Welcome/Welcome"
import { useState } from "react"
import Main from "../../components/Main/Main"

const HomePage = () => {
    const [inputData, setInputData] = useState("")
    return (
        <>
            <MyNav
                inputData={inputData}
                setInputData={setInputData} />
            <Welcome />
            <Main
                inputData={inputData} />
            <MyFooter />
        </>
    )
}

export default HomePage