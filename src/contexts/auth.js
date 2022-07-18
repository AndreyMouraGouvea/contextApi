import React from 'react';
import { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native'

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const [user, setUser] = useState({});
    const navigation = useNavigation();

    function signIn(nome, email, password) {
        if(email !== '' && password !== '') {
            setUser({
                nome: nome,
                email: email,
                status: 'ATIVO'
            })
            navigation.navigate('Home');
        }
        
    }

    return (

        <AuthContext.Provider value={{ nome: 'ANDREY MOURA', signIn, user }}>
            {children}
        </AuthContext.Provider>

    )

}
export default AuthProvider