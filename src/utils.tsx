import { useEffect, useState } from "react";

export const getProjects = () => {
    const [data,setData] = useState([]); 
    useEffect(() => {
        fetch('../src/assets/projects.json')
        .then((response) => response.json())
        .then((jsonData)=> setData(jsonData))
        .catch((error) => console.error('Erro ao os projetos:', error));
    },[])
    return data;
}

export const getTecnologies = () => {
    const[tec,setTec] = useState([]);
    useEffect(() => {
        fetch('../src/assets/tecnlogies.json')
        .then((response)=> response.json())
        .then((jsonData)=> setTec(jsonData))
        .catch((e)=> console.error('Erro ao carregar as tecnlogias:',e))
    },[])
    return tec;
}