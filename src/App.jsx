import { Footer } from "./components/Footer.jsx"
import { Header } from "./components/Header.jsx"
import { Home } from "./pages/Home.jsx"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { NewVideos } from "./pages/NewVideos.jsx"



function App() {


  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="addVideos" element={<NewVideos/>} />
        <Route  path="*" element={<p>ERROR 404</p>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
