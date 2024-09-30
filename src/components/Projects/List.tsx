import { getProjects } from "../../utils";


const List = ({page,index} : {page:string, index:number}) => {
    let projects = getProjects();
    if(index !== undefined || typeof index === 'number') {
        projects = projects.filter((_item, i) => {
            console.log("Filtering: current index", i, "exclude index:", index);
            return i != index;
          });
    }
    return(
    <div className="subcomponents-div m-top-36">
        <div className="flex justify-between ">
            <div>{page}</div>
            <button><a href="/projects">Ver Todos</a></button>
        </div>
        <div className="flex-column g-12 m-top-12">
            {projects
            .map((item,index)=>
                <button key={index} className="components-list">
                    <a href={`project/${index}`}>
                        {item.title}
                    </a>
                </button>
            )}
        </div>
    </div>
    )
}

export default List;