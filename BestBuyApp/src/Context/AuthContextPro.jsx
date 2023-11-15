import { createContext, useState } from "react"
import App from "../App"

export const AuthContext = createContext()

// function AuthContextPro({Children}){

//     const [userDetail, setUserDetail] = useState({
//         firstName : "",
//         lastName : "",
//         email : "",
//         password : "",
//         number : ""
//     })

//     return(
//       <AuthContext.Provider value={{userDetail,setUserDetail}}>
//         {Children}
//       </AuthContext.Provider>
//     )
// }

// export default AuthContextPro;