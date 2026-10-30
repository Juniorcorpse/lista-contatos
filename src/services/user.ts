import { User } from "../types/user";

export const findUserByEmailAndPass = (email: string, password : string) => {
    //consulata DB
    if(email === 'admin@exemplo.com' && password === '1234') {
        const user: User = {
            id: 1,
            name: 'Admin',
            email: 'admin@exemplo.com'
        };
        return user;
    }
    return null;
}

export const createUserToken = (user: User) => {
    //gerar token JWT
    return '1234';
}