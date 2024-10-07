import Footer from "../components/Footer";
import IconeSuperior from "../components/IconeSuperior";
import List from "../components/Projects/List";
import Title from "../components/Title";
import "../style/index.css";
const Projects = () => {
    const page = "Projetos"
    return (
        <div className="component-div m-top-12 ">
            <IconeSuperior page={"Projetos"}></IconeSuperior>
            <Title page={page}></Title>
            <p className="m-top-6">
                Aqui estão os projetos em que trabalhei. Todos foram planejados com foco no usuário e com as tecnlogias mais relevantes no mercado.
            </p>
            <List page={""} id={""} />
            <Footer></Footer>
        </div>
    );
};

export default Projects;
