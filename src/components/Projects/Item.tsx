import { useParams } from "react-router-dom";
import { getProjects } from "../../utils";
import Footer from "../Footer";
import List from "./List";

const Item = () => {
    const data = getProjects();
    const { id } = useParams();  // Pega o parâmetro ID da URL
    const item = data[id];       // Acessa o item pelo índice
    
    if (!item) {
      return <h2 className="component-div">Item não encontrado</h2>;
    }
  
    return (
      <div className="component-div m-top-12 ">
        <h1 className="righteous-regular">{item.title}</h1>
        <p className="m-top-12 font-size-14">{item.information}</p>
        <a href="">
        <button className="m-top-12">
            Visit Github
        </button>
        </a>
        {/* ESPAÇO PARA FOTOS E MAIS INFORMAÇÕES */}
        <List page={"Outros Projetos"} index={id}/>
        <Footer/>
      </div>
    );
  };

export default Item;