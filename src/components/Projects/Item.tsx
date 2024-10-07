import { useParams } from "react-router-dom";
import { getProjects } from "../../utils";
import Footer from "../Footer";
import List from "./List";

const Item = () => {
    const data : { id: string; title: string ; information: string}[] = getProjects();
    const { id }   = useParams(); 
    const item = data.find((data) => data.id == id); 
    
    if (!item) {
      return <h2 className="component-div">Item não encontrado</h2>;
    }
    return (
      <div className="component-div m-top-12 ">
        <h1 className="righteous-regular">{item.title}</h1>
        <p className="m-top-12 font-size-14">{item.information}</p>
        <List page={"Outros Projetos"} id={id}/>
        <Footer/>
      </div>
    );
  };

export default Item;