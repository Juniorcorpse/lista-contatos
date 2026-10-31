import jwt from "jsonwebtoken";
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
    //gerar token
    return '1234';
}

export const createUserJWT = (user: User) => {
    //gerar token JWT
    const payload ={
        id: user.id
    }
    return jwt.sign(payload, process.env.JWT_KEY as string, {
        expiresIn: '1 minute'
    })
}

export const findUserByToken = async (token: string) => {
    //consultar DB
    if(token === '1234') {
        const user: User = {
            id: 1,
            name: 'Admin',
            email: 'admin@exemplo.com'
        };
        return user;       
    }
    return null;
}
