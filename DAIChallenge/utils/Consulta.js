import axios from 'axios';
import { useContext, useState, createContext } from 'react';
const PlatosContext = createContext();
const API4 = 'http://challenge-react.alkemy.org?email='

export function PlatosProvider({children}){
    const [platosData, setPlatosData] =useState(null);

    useEffect(() => {
       async function getPlatosData() {
            axios
            // API MARTU: b05a5e76291b48ba9ba54648b74e9fd5
            //API SOFI : e7b8481d81cc4dfbb047e0955e432611
            .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e7b8481d81cc4dfbb047e0955e432611`)
            .then((res) => {
            setPlatos(res.data.results)})
            .catch((error) => {
             console.log(error)
            },[]);
            return (
                <PlatosContext.Provider value={{ platosData }}>
                    {children}
                </PlatosContext.Provider>
                );
            }
        }
    
    
    );
}

export function usePlatos(){
    return useContext(PlatosContext);
}

export const postLogin = async (email, password) => {
    //challenge@alkemy.org&password=react
    const response = await fetch(API4 + `${email}` + `&password=` + `${password}`, {
      method: 'POST',
    });
    console.log(response) 
    return await response.json()
  }