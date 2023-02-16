import { ChangeEvent, FormEvent } from "react";

interface Author {
    name: String;
    role?: string; //Quando colocamos o interrogação estamos deixando claro que esta propriedade da nossa interface/objeto não é obrigatório ser passado onde quer que seja usado
    avatarUrl?: string; //Propriedade opcional
}

interface Content {
    type: 'paragraph' | 'link'; //Podemos declarar tipos com valores já definidos. Qualquer valor fora destes não serão aceitos (Isto ajuda com a inteligência do TS)
    content: string;
}

interface PostProps {
    author: Author;
    story: (comment: string) => void // Precisamos declarar o tipo de retorno da função. Ela pode ser Void caso não retorne nada
    content: Content[];  //Array de Content (Content é uma interface declarada acima, logo a tradução seria "Um array de objetos contendo type e content")
    juridicPerson?: boolean;  //Propriedade opcional
}

export function Post({ author, content, story }: PostProps) {
    
    function handleDivClick(event: FormEvent) { //Event do tipo FormEvent
        event.preventDefault();
    }

    function handleInputClick(event: ChangeEvent<HTMLInputElement>) { //Evento do tipo ChangeEvent passando como parâmetro de tipo HTMLInputElement
        event.target.value
    }

    function handleStoryClick(){
        story("Olá tudo bem?");
    }

    return (
        <form onChange={handleDivClick}>
            <div >{author.name}</div>
            <input onChange={handleInputClick}></input>
            {content.map(line => {
                if (line.type === "link") {
                    return (<a href={line.content}></a>)
                } else if (line.type === "paragraph") {
                    return (<p>{line.content}</p>)
                }
            })}
            <button onClick={handleStoryClick}>Enviar Story</button>
        </form>
    )
}
