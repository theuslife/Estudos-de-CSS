import React from 'react'

export default function estudos() {

    handleUserSubmit = (event) => {
        // event.preventDefault evita o submit do Form tentar redirecionar 
        // o nosso formulário para outra página. Então ele retira qualquer erro
        // que possa acontecer nesta ação. Pois o comum é usar o React como SPA 
        // e como SPA não tem páginas de redirecionamento, logo é descenessário
        // o Form tentar forçar este redirecionamento no onSubmit
        event.preventDefault; 
    }

    return (
        <form onSubmit={handleUserSubmit}></form>
    )
}
