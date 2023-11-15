import { useState } from 'react'
import LandingPage from './pages/main-pages/LandingPage'
import CreateAcc from './pages/main-pages/CreateAcc'
import { AuthContext } from './Context/AuthContextPro'
import SignIn from './pages/main-pages/SignIn'
import AllRoute from './Routes/AllRoute'

function App() {
  const [count, setCount] = useState(0)
  const[showPass,setShowPass] = useState(true)

  function handleSwitch(e){
    setShowPass(!showPass)
  }

    const[isAuth,setIsAuth] = useState(false)

    const [createAccDetail, setCreateAccDetail] = useState({
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      number : ""
    })

    const [signInDetail,setSignInDetail] = useState({
      email : "",
      password : ""
    })


  return (
    <>
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      createAccDetail,
      setCreateAccDetail,
      signInDetail,
      setSignInDetail,
      showPass,
      setShowPass,
      handleSwitch
      }}>
     
     <AllRoute />
    </AuthContext.Provider>
    </>
  )
}

export default App
