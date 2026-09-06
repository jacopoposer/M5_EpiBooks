
import MyFooter from "./components/MyFooter/MyFooter"
import MyNav from "./components/MyNav/MyNav"
import Welcome from "./components/Welcome/Welcome"
import { useState } from "react"
import { ThemeProvider } from "./contexts/ThemeContext"
import Main from "./components/Main/Main"

function App() {
  const [inputData, setInputData] = useState("")
  return (
    <>
      <ThemeProvider>
        <MyNav
          inputData={inputData}
          setInputData={setInputData} />
        <Welcome />
       <Main
       inputData={inputData}/>
        <MyFooter />
      </ThemeProvider>
    </>
  )
}

export default App
