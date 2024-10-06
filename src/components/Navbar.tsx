import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return(
        <nav className="flex justify-between component-div align-center m-top-12 ">
            <Link to="/" className="righteous-regular rounded-10 gradient-background align-center display-inline hover-bold shadow p-full-4" >&lt;L&gt;</Link>
            <div className="flex justify-around g-12 ">
                <Link to="/" className={` p-full-6 rounded-10 ${location.pathname === "/" ? "active" : "inactive"} `}>Home</Link>
                <Link to="/about" className={`p-full-6 rounded-10 ${location.pathname === "/about" ? "active" : "inactive"}`}>Sobre Mim</Link>
                <Link to="/projects" className={`p-full-6 rounded-10 ${location.pathname.startsWith("/projects") ? "active" : "inactive"}`}>Projetos</Link>
            </div>
        </nav> 
        
    )
}

export default Navbar