import { Route,Routes } from "react-router-dom"
import Home from "./home"
  import Displayticket from "./Displayticket"
import Navbar from "./component/NavBar"
import Footer from "./Footer"



const App = () => {
  return (
    <div>
      <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Displayticket" element={<Displayticket />} />
  </Routes>

  <Footer/>
    </div>
  )
}

export default App
