import Buttons from "./Buttons";

const Footer = () => {
    return(
        <>
        <div className="m-top-12">
            <h2 className="text-align-center p-36">Vamos trabalhar juntos?</h2>
            <span className=" flex justify-center text-align-center">Criar aplicações dinâmicas que alavacam o seu negócio</span>
        </div>
        <div className="flex-center g-12 m-top-8">
          <Buttons name={"Linkedin"} link={"https://www.linkedin.com/in/l%C3%ADvia-leal-264472176/"}></Buttons>
          <Buttons name={"Github"} link={"https://github.com/livialeall"}></Buttons>
          <Buttons name={"Copiar Email"} link={""}></Buttons>
        </div>
        <footer className="text-align-center footer m-top-12 gradient-background ">
            <div className="righteous-regular">&lt;LEAL&gt;</div>
            <div className="font-size-8">2024</div>
        </footer>
        </>
    )
}

export default Footer;