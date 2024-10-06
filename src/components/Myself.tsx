import { getTecnologies } from "../utils";
import Buttons from "./Buttons";

const Myself = () => {
  const tecnlogies: { id: string; title: string }[] = getTecnologies();
  return (
    <div className="flex justify-between">
      <div>
        <div className=" flex align-center g-6">
          <p className="circle gradient-background shadow"></p>
          <div>FullStack Developer</div>
        </div>

        <h1 className="m-top-24 righteous-regular">Lívia Leal</h1>
        <div className="display-inline align-baseline g-6">
          <p className="m-top-4 color-light">Estiágiária - BTG Pactual</p>
          <p className="circle gradient-background"></p>
          <p className="m-top-6 font-size-12 color-light">Rio de Janeiro</p>
        </div>
        {/* Quero que ele tenha um tamanho maximo de 45% da tela e se estourar esse tamanho quero que crie outra div*/}
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
