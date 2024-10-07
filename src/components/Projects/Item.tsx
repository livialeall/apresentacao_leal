import { useParams } from "react-router-dom";
import { getProjects } from "../../utils";
import Footer from "../Footer";
import List from "./List";
import Buttons from "../Buttons";
import Tecnologias from "../Tecnologias";

const Item = () => {
    const data : { id: string; title: string ; information: string ; link : string; problem:string ;solution:string ;github:string; technologies : []}[] = getProjects();
    const { id }   = useParams(); 
    const item = data.find((data) => data.id == id);
    if (!item) {
      return <h2 className="component-div">Item não encontrado</h2>;
    }
    return (
      <div className="component-div m-top-12 ">
        <Tecnologias itens={item.technologies}></Tecnologias>
        <h1 className="righteous-regular">{item.title}</h1>
        <p className="m-top-12 font-size-14">{item.information}</p>
        <div className="flex g-12 m-top-6">
          <Buttons name="Visitar Projeto" link={item.link}></Buttons>
          <Buttons name="Github" link={item.github}></Buttons>
        </div>
        {/* imagem do projeto  */}
        <h2>Proposta sugerida</h2>
        <p>{item.problem}</p>
        {/* imagem do projeto  */}
        <h2>Solução apresentada</h2>
        <p>{item.solution}</p>
        <List page={"Outros Projetos"} id={id}/>
        <Footer/>
      </div>
    );
  };

export default Item;