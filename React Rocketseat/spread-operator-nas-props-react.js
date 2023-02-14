import React from 'react'

export default function spreadOperatorNasPropsReact() {
    return (
        <>
            <MeuComponent
                hasBorder={false}
                title="Olá mundo"
                alt="oi"
                src="www.something.com.br/01.png"
            />
            <MeuComponent
                hasBorder={false}
                title="Olá mundo"
                alt="oi"
                src="www.something.com.br/01.png"
                qualquerPropriedadeDeImagemAdicional="Oláolá"
                qualquerPropriedadeDeImagemAdicional2="HelloHello"
            />

        </>
    )
}


// Spead Operator de uma props desestruturada vai nos da acesso a todas props onde este 
// componente foi chamado
const MeuComponent = ({ hasBorder, ...props }) => {
    return (
        <img
            hasBorder={hasBorder}
            //Pegue todas propriedades restantes que forem passadas sem a necessidade 
            // de eu declarar todas elas no meu component recebedor
            {...props}
        />
    )
}
