import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [post,setPost] = useState(null)

  const getRandomNumber = () => Math.ceil(Math.random() * 10)

  const fetchPost = async() => {
    const postNumber = getRandomNumber()
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${postNumber}`)
    const data = await response.json()
    return data.title
  }

  const handleFetchPost = async () => {
    const result = await fetchPost()
    setPost(result)
  }


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>비동기 테스트</h1>
      <div className="card">
        <button onClick={handleFetchPost}>
          getPost!
        </button>
       
        <p>
          post is {post}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
