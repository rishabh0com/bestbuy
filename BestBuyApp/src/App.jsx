import { useState } from 'react'
import { AuthContext } from './Context/AuthContextPro'
import AllRoute from './Routes/AllRoute'
import AllProductPage from './pages/main-pages/AllProductPage'
import CategoryProduct from './Components/main-components/categoryProduct'

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

    const [category,setCategory] = useState("All Product")
    const [proCount,setProCount] = useState(0)


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
      handleSwitch,
      category,
      setCategory,
      proCount,
      setProCount
      }}>
     {/*  */}
     <AllRoute />
     {/* <AllProductPage/> */}

    </AuthContext.Provider>
    </>
  )
}

export default App
