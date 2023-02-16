import { Post } from './components/Post'

function App() {
  function sendMessageStory(story: string): void {
    console.log(story)
  }

  return (
    <div className="App">
      <Post
        story={sendMessageStory}
        author={{ name: "Matheus" }}
        content={[{ type: "link", content: "Olá mundo" }]}
      />
    </div>
  )
}

export default App
