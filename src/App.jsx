import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import CreatePost from './components/CreatePost'
import ViewAll from './components/ViewAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp/>
      <SignIn/>
      <CreatePost/>
      <ViewAll/>
    </>
  )
}

export default App
