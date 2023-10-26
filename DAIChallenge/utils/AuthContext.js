import { createContext, useContext, useState } from 'react';
import { ActionTypes, setContextState, useContextState } from './contextState';
import { postLogin } from './Consulta';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const { contextState, setContextState } = useContextState()


    const login = async (email, password) => {
        setLoading(true);

        try {
            const response = await fakeLogin(email, password); 
            const token = response.token;
          
            setUser({ email, token });
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        } finally {
            setLoading(false);
        }
    };

    function fakeLogin(email, password) {
   
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                //http://challenge-react.alkemy.org?email=challenge@alkemy.org&password=react
                if (await postLogin(email, password) != Error) {
                    let token = null
                    token = await postLogin(email, password)
                    setContextState({
                        type: ActionTypes.SetToken,
                        value: token.token
                    });

                    resolve({ token });

              
                }
                reject(new Error('Usuario o contraseña incorrectos'));
            }, 1000);
        })
    };

    const value = {
        user,
        loading,
        login,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}