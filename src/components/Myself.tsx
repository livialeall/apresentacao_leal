import Buttons from "./Buttons";
import Footer from "./Footer";
import Index from "./Projects/Index";

const Myself = () => (
    <div className="component-div m-top-12">
        <li>FullStack Developer</li>
        <h1 className="p-12">
            Lívia Leal
        </h1>
        <p>Desenvolvedora fullstack</p>
        <p className="p-2">Estiágiária - BTG Pactual</p>

        <div className="flex g-12 p-12">
            <div>C#</div>
            <div>React</div>
            <div>SQL</div>
            <div>Python - Panda</div>
        </div>
        <Buttons></Buttons>
        <Index></Index>
        <Footer></Footer>
    </div>
)

export default Myself