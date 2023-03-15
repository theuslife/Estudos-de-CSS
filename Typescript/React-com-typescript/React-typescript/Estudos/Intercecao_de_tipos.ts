interface User{
    id: number, 
    name: string
}

interface Char{
    nickname: string, 
    level: number
}

type PlayerInfo = User & Char; //Isto é a sintaxe de interceção de tipos/interfaces. Com um "&";

let info: PlayerInfo = {
    id: 1, 
    name: "Matheus Rodrigues da Silva",
    nickname: "xTheus",
    level: 95
}

type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string;
}

// Fazendo união com Type
type TAccount = TUser & TPayment

interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

// Fazendo união com interfaces
interface IAccount extends IUser, IPayment {}

let teste: IAccount; 

teste = {
    id: 6, 
    name: "Matheus", 
    method: "Ronaldo",
} 