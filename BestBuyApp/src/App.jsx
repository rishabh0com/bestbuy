import { useState } from 'react'
import { AuthContext } from './Context/AuthContextPro'
import AllRoute from './Routes/AllRoute'
import CartPage from './pages/CartPage'

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
    const [cartItem,setCartItem] = useState([]);

    console.log("Cart Item : ",cartItem);


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
      setProCount,
      cartItem,
      setCartItem
      }}>
     
     <AllRoute />
     {/* <AllProductPage/> */}
     {/* <CartPage /> */}
    </AuthContext.Provider>
     
    </>
  )
}

export default App
