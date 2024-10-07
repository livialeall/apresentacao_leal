import Buttons from "./Buttons";

const Footer = () => {
    return(
        <>
        <div>
            <h2 className="text-align-center p-36">Vamos trabalhar juntos?</h2>
            <span className=" flex justify-center text-align-center">Criar aplicações dinâmicas que alavacam o seu negócio</span>
        </div>
        <div className="flex-center m-top-12">
            <Buttons></Buttons>
        </div>
        <footer className="text-align-center subcomponents-div m-bottom-n12 m-top-36 gradient-background ">
            <div className="righteous-regular">&lt;LEAL&gt;</div>
            <div className="font-size-8">2024</div>
        </footer>
        </>
    )
}

export default Footer;