import { useState } from "react";


const Buttons = () => {
    const email = "liviabenine@gmail.com";
    const [buttonText, setButtonText] = useState("Email");

    const copiarEmail = () => {
    navigator.clipboard.writeText(email)
    .then(() => {
        setButtonText("Email copiado!")
        setTimeout(() => {
            setButtonText("Email");
          }, 1500);
    })
    .catch(err => {
    alert("Erro ao copiar o e-mail"),
    console.error("Erro:",err)
    });
    }
    return(
        <div className="flex g-12 p-16">
            <button onClick={copiarEmail}>{buttonText}</button>
            <button><a href="https://www.linkedin.com/in/l%C3%ADvia-leal-264472176/" target="blank"> Linkedin</a></button>
            <button><a href="https://github.com/livialeall" target="blank">Github</a></button>
        </div>

    )
}

export default Buttons