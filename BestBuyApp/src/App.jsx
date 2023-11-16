import { useState } from 'react'
import { AuthContext } from './Context/AuthContextPro'
import AllRoute from './Routes/AllRoute'
import AllProductPage from './pages/main-pages/AllProductPage'

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
     
     {/* <AllRoute /> */}
     <AllProductPage/>
    </AuthContext.Provider>
    </>
  )
}

export default App
