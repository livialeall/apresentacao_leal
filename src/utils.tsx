import { useEffect, useState } from "react";

export const getProjects = () => {
    const [data,setData] = useState([]); 
    useEffect(() => {
        fetch('../src/components/Projects/projects.json')
        .then((response) => response.json())
        .then((jsonData)=> setData(jsonData))
        .catch((error) => console.error('Erro ao os projetos:', error));
    })
    return data;
}