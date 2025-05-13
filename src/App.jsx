import { Routes,Route } from "react-router-dom"
import Home from "./pages/home"
import Notices from "./pages/notices"
import Events from "./pages/events"
import Courses from "./pages/courses"
import Faculty from "./pages/faculty"
import Login from "./pages/login"
import Dashboard from "./pages/dashboard"
import Navbar from "./pages/navbar"
import Footer from "./pages/footer"
import './App.css'
function App() {

  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path="/footer" element={<Footer/>} />
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/notices" element={<Notices/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/faculty" element={<Faculty/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
