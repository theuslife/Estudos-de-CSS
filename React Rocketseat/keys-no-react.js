// 3 Momentos em que um componente react renderezia novamente
// Quando o estado do component altera
// Quando uma proprietade do component altera
// Quando um componente pai rendereziza novamente 

// Qual a serventia das keys? 
// Keys ajuda em listagens enormes com muitos dados 
// Pois ao tentar renderizar uma nova informação da lista 
// o react grava cada Key e assim só acrescenta a nova informação sem precisar carregar tudo do absoluto zero
// Isto nos da uma performace muito melhor

// Porque não podemos usar índices nos arrays? 
// Vamos supor que um estado/array trocou de posição elementos (sort)
// Apesar das trocas de posições serem feitas os índices dos arrays serão os mesmos
// e o React ao indentificar que o índice são os mesmos ele renderiza tudo do absoluto zero
// Se tivermos uma listagem enorme isto custa performace

import React, { useState } from 'react'

// Certo
export default function keysNoReactCerto() {
    const [first, setfirst] = useState([{
        name:
            'matheus', id: 15
    }])
    
    return (
        <div>{first.map(element => {
            return (
                <div key={element.id}> 
                </div>
            )
        })}</div >
    )


}

//Errado
export default function keysNoReactErrado() {
    const [first, setfirst] = useState([{
        name:
            'matheus', id: 15
    }])
    
    return (
        <div>{first.map((element, index) => {
            return (
                <div key={index}> 
                </div>
            )
        })}</div >
    )
}

