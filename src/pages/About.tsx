import Footer from "../components/Footer";
import IconeSuperior from "../components/IconeSuperior";
import List from "../components/Projects/List";
import Title from "../components/Title";
import "../style/index.css";
const About = () => {
    const page = "Sobre Mim"
  return (
    <>
      <div className="component-div m-top-12 ">
      <IconeSuperior page={page}></IconeSuperior>
      <Title page={page}></Title>
        <p>
          Eu me chamo Lívia Leal, sou desenvolvedora fullstack há 1 ano Rio
          de janeiro.Trabalho com C#, React e SQL e meu objetivo é desenolver
          sistemas relevantes para os usuários mais diversos e atingir os
          objetivos comercias dos clientes.
        </p>
        <img
          src="src/assets/20230801_075842 (1).png"
          alt=""
          className="m-top-12 flex justify-center align-center shadow rounded-10"
        />
        <h2>Mais sobre mim</h2>
        <p>
          Eu comecei minha carreira na área de contabilidade, mas em 2023
          comecei a estudar desenvolvimento e me apaixonei pelo setor de
          tecnologia. Faço faculdade de Análise e Desenvolvimento de Sistemas na
          IBMR onde solifico meus conhecimentos sobre os assuntos fundamentais
          de tecnologia e estudo sobre as novas tecnlogias relevantes do mercado
        </p>

        <h2>Projetos</h2>
        <p>
          Com o objetivo de me manter atualizada realizo projetos em que faço
          tanto a parte de design e estudo de produto como o desenvolvimento e a
          manutenabilidade.
        </p>
        <List page={"Projetos"} id={""} />
        <Footer></Footer>
      </div>
    </>
  );
};

export default About;
