import { getTecnologies } from "../utils";
import Buttons from "./Buttons";
import IconeSuperior from "./IconeSuperior";
import Tecnlogias from "./Tecnologias";
import Title from "./Title";

const Myself = () => {
  const tecnlogies: { id: string; title: string }[] = getTecnologies();
  const tecNames = tecnlogies.map((item) => item.title);
  const page = "Lívia Leal";
  return (
    <div className="flex justify-between">
      <div>
        <IconeSuperior page={"Fullstack Developer"}></IconeSuperior>

        <Title page={page}></Title>

        <div className="">
          <p className="color-light">Estagiária - BTG Pactual</p>
          <p className="font-size-12 color-light">Rio de Janeiro</p>
        </div>

        <Tecnlogias itens={tecNames}></Tecnlogias>

        <div className="flex g-12 p-16">
          <Buttons
            name={"Linkedin"}
            link={"https://www.linkedin.com/in/l%C3%ADvia-leal-264472176/"}
          ></Buttons>
          <Buttons
            name={"Github"}
            link={"https://github.com/livialeall"}
          ></Buttons>
          <Buttons name={"Copiar Email"} link={""}></Buttons>
        </div>
      </div>
      <div>{/* espaço destinado a foto */}</div>
    </div>
  );
};

export default Myself;
