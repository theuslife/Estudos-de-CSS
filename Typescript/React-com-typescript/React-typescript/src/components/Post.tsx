import { ChangeEvent, FormEvent} from "react";

interface Author {
    name: String;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({ author, content }: PostProps) {

    function handleDivClick(event: FormEvent) {
        event.preventDefault();
    }

    function handleInputClick(event: ChangeEvent<HTMLInputElement>) {
        event.target.value
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
        </form>
    )
}
