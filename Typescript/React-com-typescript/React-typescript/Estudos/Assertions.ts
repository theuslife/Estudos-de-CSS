interface UserResponse {
    id: number, 
    name: string, 
    avatar: string,
    age: number
}

// Vamos supor que este userResponse seja um objeto devolvido ao consumir uma API 
// Para o typescript não chiar que esse objetivo devolvido não possui tipo 
// nós podemos fazer um assertion, dizendo que o tipo do objetivo é alguém
// para isso usamos essa sintaxe com "as" abaixo para dizer o tipo dessa resposta
let userResponse = {} as UserResponse;


