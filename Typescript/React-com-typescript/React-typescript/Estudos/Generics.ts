/* 

    Prática usadas pela comunidade na declaração de generics
    S = State    
    T = Type 
    K = key
    V = value
    E = element
*/

// Generics ajuda a dizer o tipo de um parâmetro 
// em sua criação apenas. Depois disto qualquer tipo 
// diferente que seja passado como parâmetro não será aceito

// Enquanto tipagem em parâmetros que aceitam mais de dois tipos 
// sempre irá aceitar os dois tipos em qualquer momento do código
// Generics impede disto acontecer

//Podemos extender interfaces e tipos no nosso parâmetro generic
function useState<T extends number | string = number>() { // Um sinal de "=" quer dizer quem será o tipo default caso ninguém mande o parâmetro ao usar esta função/classe
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set}
}

let newState = useState<number>();
newState.get();
newState.set("João"); //Jogão da erro pois eu disse que meu generics é do tipo Number em sua criação. Logo não posso usar outro tipo depois de inicializa-lo
newState.set(123);

let newState2 = useState<string>();
newState2.set("João");
newState2.set(123); // Aqui da erro pois iniciei meu generics com tipo string

let newState3 = useState();
newState3.set("João"); // Aqui da erro pois o default do nosso parâmetro é number se caso não declarado na inicialização
newState3.set(123);