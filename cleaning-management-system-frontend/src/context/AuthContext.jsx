import React, {createContext, useState, useContext, useEffect} from 'react'

const userContext = createContext({})

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)

    // useEffect(() => {
    //   const verifyUser = async ()  => {
    //     try{
    //       const response = await axios.get('http://localhost: 5000/api/auth/verify')
    //       if(response.data.success){
    //         setUser(response.data.user);
    //       }
    //     }catch(error){
    //       if(error.response && !error.response.data.error){
    //         navigate('/login');
    //       }
    //     }

    //   }
    //  },[])

    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
      setUser(null)
      localStorage.removeItem("token");
    }

  return (
    <userContext.Provider value={{user, login, logout}}>
        {children}
    </userContext.Provider>
  )
}

export const useAuth = () =>  useContext(userContext)
export default AuthContext