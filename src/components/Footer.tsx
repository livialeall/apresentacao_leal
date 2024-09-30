import Buttons from "./Buttons";

const Footer = () => {
    return(
        <>
        <div>
            <h2 className="text-align-center p-36">Vamos trabalhar juntos?</h2>
            <p className="p-6 text-align-center p-6">Criar aplicações dinâmicas que alavacam seu negócio</p>
        </div>
        <div className="flex-center m-top-12">
            <Buttons></Buttons>
        </div>
        <footer className="text-align-center subcomponents-div m-bottom-n12 m-top-36">
            <div className="righteous-regular">&lt;LEAL&gt;</div>
            <div className="font-size-8">2024</div>
        </footer>
        </>
    )
}

export default Footer;