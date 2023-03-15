
// Declaração explícita
let texto: string;

// Podemos declarar arrays de números, assim como de outros tipos
let arrayDeNumeros: number[]; 
arrayDeNumeros = [1,4,5];

// Array de strings
let arrayDeStrings: string[];
arrayDeStrings = ['Arroz', 'Feijão'];

// Também podemos declarar tipos de arrays com esta sintaxe abaixo
let pontos: Array<number>; 
pontos = [5,4,7];

// Segunda forma de declaração array de strings
let users: Array<string>; 
users = ['5','4','7'];


// Posso criar um "tipo" para mim 
// para que não haja repetição de múltiplos tipos em diferente variáveis
// sempre crie tipos com letra maiúscula
type MeuTipo = string | number

let adminId: MeuTipo;
let userId: MeuTipo;

adminId = 15;
adminId = "15";
adminId = true; //Não é do tipo meuTipo