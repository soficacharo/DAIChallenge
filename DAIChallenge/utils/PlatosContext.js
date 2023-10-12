import axios from 'axios';
import React, { useContext, useState, createContext, useEffect} from 'react';

const PlatosContext = createContext();


export function PlatosProvider({children}){
    const [platosData, setPlatosData] =useState(null);

    useEffect(() => {
       async function getPlatosData() {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e7b8481d81cc4dfbb047e0955e432611`)
            } catch (error){
                console.error('Error en el fetch de los datos de Platos', error);
            }
        }

        getPlatosData();
    }, []);


            return (
                <PlatosContext.Provider value={{ platosData }}>
                    {children}
                </PlatosContext.Provider>
                );
            }

export function usePlatos(){
    return useContext(PlatosContext);
}

