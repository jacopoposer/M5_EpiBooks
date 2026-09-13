
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext"
import { CommentsProvider } from "./contexts/CommentsContext/CommentContexts"
import AppContent from "./components/AppContent/AppContent"



function App() {

  return (
    <ThemeProvider>
      <CommentsProvider>
        <AppContent />
      </CommentsProvider>

    </ThemeProvider>

  )
}

export default App
