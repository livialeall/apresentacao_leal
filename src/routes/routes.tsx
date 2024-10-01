import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Item from "../components/Projects/Item";

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} ></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/project/:id" element={<Item/>}></Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
        )
}
    


export default Rotas;