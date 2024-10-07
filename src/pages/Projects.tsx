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
                Todos os sistemas abaixo foram foram desenvolvidos com foco na usabilidade do usuário, atingimento do objetivo comercial do cliente e fácil manutenabilidade.Procuro sempre estudar as tecnologias mais atuais para criação de aplicações robustas e sustentáveis.
                lore
            </p>
            <List page={""} id={""} />
            <Footer></Footer>
        </div>
    );
};

export default Projects;
