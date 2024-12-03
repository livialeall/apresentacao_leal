import { useState } from "react";
import { Link } from "react-router-dom";


const Buttons = ({name,link}: {name: string, link : string}) => {
    const email = "liviabenine@gmail.com";
    const [buttonText, setButtonText] = useState("Copiar email");

    const copiarEmail = () => {
    navigator.clipboard.writeText(email)
    .then(() => {
        setButtonText("Email copiado!")
        setTimeout(() => {
            setButtonText("Copiar email");
          }, 1500);
    })
    .catch(err => {
    alert("Erro ao copiar o e-mail"),
    console.error("Erro:",err)
    });
    
    }
    if(name == "Copiar Email"){
        return(
            <>
                <button className="gradient-background p-full-4 rounded-5 hover-bold font-size-12 shadow p-6-10" onClick={copiarEmail}>{buttonText}</button>
            </>
        )
    }
    else{
        return(
            <>
                <Link to={link} target={name == "Ver Todos" ? "" : "_blank"} className="gradient-background p-full-4 rounded-5 hover-bold font-size-12 shadow p-6-10" >{name}</Link>
            </>
        )
    }
    
}

export default Buttons