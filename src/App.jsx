import HomePage from "./pages/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound/NotFound"
import BookDetail from "./pages/BookDetail/BookDetail"
import { ThemeProvider } from "./contexts/ThemeContext"



function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="/:asin"
            element={<BookDetail />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
