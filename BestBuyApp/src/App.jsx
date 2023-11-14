import { useState } from 'react'
import LandingPage from './pages/main-pages/LandingPage'
import CreateAcc from './pages/main-pages/CreateAcc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LandingPage /> */}
    <CreateAcc />
    </>
  )
}

export default App
