import { useState } from "react";
import { Link } from "react-router-dom";


const Buttons = ({name,link}: {name: string, link : string}) => {
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
        <>
            <Link to={link} target="_blank" className="gradient-background p-full-4 rounded-5 hover-bold font-size-12 shadow p-sides-4-8" onClick={link == "" ? copiarEmail : undefined}>{name}</Link>
        </>
    )
}

export default Buttons