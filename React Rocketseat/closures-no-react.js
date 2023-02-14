import React from 'react'

export default function closuresNoReact() {
    const [count, setCount] = useState(0);
    
    function handleSetCount(){

        // Ao usarmos uma função no primeiro parâmetro do setCount
        // conseguimos ter acesso do valor mais atualizado da sequência 
        // de updates que o React faz. 
        setCount((updatedState) => {
            return updatedState + 1;
        });

        // Aqui o valor do updatedState vai ser 1 e não 0
        // pois ele está pegando o valor mais atualizado que vem
        // do setCount anterior 
        setCount((updatedState) => {
            return updatedState + 1;
        });

        // Isto acontece porque o React por mais que ele renderize novamente o component closuresNoReact
        // ele ainda vai executar o código restante do anterior. Se não pergamos o valor updatedState 
        // nunca teremos o valor atualizado do setCount anterior

    }

    return (
        <div>{first.map(element => {
            return (
                <div onClick={handleSetCount}> 
                    {count}
                </div>
            )
        })}</div >
    )
}
