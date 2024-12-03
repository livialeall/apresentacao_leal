import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return(
        <nav className="flex justify-between component-div align-center">
            <Link to="/" className="righteous-regular rounded-10 gradient-background align-center display-inline hover-bold shadow p-4-6" >&lt;L&gt;</Link>
            <div className="flex justify-around g-12 ">
                <Link to="/" className={`rounded-10 hover-gray p-4-6 ${location.pathname === "/" ? "active" : "inactive"} `}>Home</Link>

                <Link to="/about" className={`rounded-10 hover-gray p-4-6 ${location.pathname === "/about" ? "active" : "inactive"}`}>Sobre Mim</Link>

                <Link to="/projects" className={`rounded-10 hover-gray p-4-6 ${location.pathname.startsWith("/projects") ? "active" : "inactive"}`}>Projetos</Link>
            </div>
        </nav> 

        
    )
}

export default Navbar