import { BrowserRouter,Routes,Route } from "react-router-dom"
import Feed from "./pages/Feed"
import Header from "./Components/Header.jsx"
import VideoDetail from "./pages/VideoDetail"
import SearchResults from "./pages/SearchResults"

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path="/" element={<Feed/>}/>
    <Route path="/watch" element={<VideoDetail/>}/>
    <Route path="/results" element={<SearchResults/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
