const Tecnologias = ({itens} : string[]) =>{
    return (
        <div className="flex g-12 font-size-14  flex-wrap max-width background-purple-hover ">
          {itens.map((item,index) => (
            <div className="display-inline align-baseline g-6 background-gray p-sides-4-8 rounded-10">
              <div className="circle"></div>
              <div key={index}>{item}</div>
            </div>
          ))}
        </div>
    )
}

export default Tecnologias;