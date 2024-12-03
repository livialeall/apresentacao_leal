import { Link, useLocation } from "react-router-dom";
import { getProjects } from "../../utils";
import Buttons from "../Buttons";

const List = ({ page, id }: { page: string; id: string | undefined }) => {
  const projects: { id: string; title: string }[] = getProjects();
  const currentLocation = useLocation();
  let filteredProjects;
  if(currentLocation.pathname == "/" || currentLocation.pathname == "/about"){
    filteredProjects = projects.slice(0,3)
  }
  else if(id){
    filteredProjects = projects.filter((project) => project.id != id)
  }
  else{
    filteredProjects = projects
  }
  return (
    <div className="subcomponents-div ">
        <div className="flex justify-between align-center p-4-top p-4-bottom ">
          <div className=" flex align-center g-6">
            <p className="shadow circle gradient-background "></p>
            <div className="font-size-18 roboto-medium ">{page}</div>
          </div>
          {id != "0" && (
          <Buttons name="Ver Todos" link={"/projects"}></Buttons>
        )}
        </div>
      

      <div className="flex-column g-12 m-top-4 m-bottom-4">
        {filteredProjects.map((item) => (
          <Link
            to={`/projects/${item.id}`}
            className="components-list hover-color-gradient shadow gradient-background-light "
          >
            <button
              key={item.id}
              className="display-inline align-baseline g-6 "
            >
              {item.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
