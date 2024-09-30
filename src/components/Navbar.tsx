import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Item from "../components/Projects/Item";

const Navbar = () => (
    <Router>
        <nav className="flex justify-between component-div">
            <div className="flex justify-around g-12">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </div>
            <div className="flex righteous-regular">
                <a href="/">&lt;L&gt;</a>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/project/:id" element={<Item/>}></Route>
        </Routes>
    </Router>
)

export default Navbar