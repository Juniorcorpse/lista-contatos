import {ExtractJwt, Strategy as JWTStrategy} from  'passport-jwt';
import { findUserById } from '../services/user';
import { RequestHandler } from 'express';
import passport from 'passport';
import { User } from '../types/user';

const options ={
    //onde ele vai puxar o jwt
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //chave privada
    secretOrKey: process.env.JWT_KEY as string
}
//1ª - Criar a estrategia de autenticação.

export const jwtStrategy = new JWTStrategy(options, async (payload, done) =>{
    console.log('payload:', payload);
    const {id} = payload;
    
    const user = await findUserById(id);
    
    if(!user){
        return done(null, false);
    }
    return done(null, user);
});

//2ª - Criar o middleware para interferir na rota desejada.
export const jwtStrategyAuth:RequestHandler =(req, res, next) =>{
    const authRequest = passport.authenticate('jwt',
        (err: any, user: User | false) =>{
            if(user){
                req.user = user;
                return next();
            }
            console.log(user);
            return res.status(401).json({error:"acesso negado JWT!"});
        }
    );
    authRequest(req, res, next);
}