import { getTecnologies } from "../utils";
import Buttons from "./Buttons";
import IconeSuperior from "./IconeSuperior";
import Title from "./Title";

const Myself = () => {
  const tecnlogies: { id: string; title: string }[] = getTecnologies();
  const page = "Lívia Leal"
  return (
    <div className="flex justify-between">
      <div>
      <IconeSuperior page={"Fullstack Developer"}></IconeSuperior>

        <Title page={page}></Title>
        <div className="display-inline align-baseline g-6">
          <p className="m-top-4 color-light">Estagiária - BTG Pactual</p>
          <p className="circle gradient-background"></p>
          <p className="m-top-6 font-size-12 color-light">Rio de Janeiro</p>
        </div>
        <div className="m-top-24 flex g-12 font-size-14  flex-wrap max-width background-purple-hover ">
          {tecnlogies.map((item) => (
            <div className="display-inline align-baseline g-6 background-gray p-sides-4-8 rounded-10 ">
              <div className="circle gradient-background shadow"></div>
              <div key={item.id} >
                {" "}
                {item.title}{" "}
              </div>
            </div>
          ))}
        </div>
        <Buttons></Buttons>
      </div>
      <div>{/* espaço destinado a foto */}</div>
    </div>
  );
};

export default Myself;
