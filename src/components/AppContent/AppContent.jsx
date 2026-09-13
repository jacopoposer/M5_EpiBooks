import HomePage from "../../pages/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "../../pages/NotFound/NotFound"
import BookDetail from "../../pages/BookDetail/BookDetail"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext"


const AppContent = () => {
  const { isDark } = useContext(ThemeContext)

  return (

    <div
      className={`min-vh-100 ${isDark ? "bg-dark" : "bg-light"}`}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="/book/:asin"
            element={<BookDetail />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppContent