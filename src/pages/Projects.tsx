import Footer from "../components/Footer";
import List from "../components/Projects/List";
import "../style/index.css";
const Projects = () => {
  return (
    <div className="component-div m-top-12 ">
      <div className=" flex align-center g-6">
        <p className="circle gradient-background shadow"></p>
        <div>Projetos</div>
      </div>

      <h1 className="m-top-24 righteous-regular">Projetos</h1>
      <p className="m-top-6">
        Aqui estão os projetos em que trabalhei. Todos foram planejados com foco no usuário e com as tecnlogias mais relevantes no mercado.
      </p>
      <List page={""} id={""} />
      <Footer></Footer>
    </div>
  );
};

export default Projects;
