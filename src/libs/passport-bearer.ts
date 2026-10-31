import { Strategy as BearerStrategy } from "passport-http-bearer";
import { createUserToken, findUserByEmailAndPass, findUserByToken } from "../services/user";
import { User } from "../types/user";
import { RequestHandler } from "express";
import passport from "passport";

type BearerStrategyResponse = { 
   auth:  {token: string},
    user: User; 

};

//1ª - Criar a estrategia de autenticação.
export const bearerStrategy = new BearerStrategy(async (token, done) => {
    //console.log('token:', token);
    const user = await findUserByToken(token);
    if (!user) {
        return done(null, false);        
    }
    return done(null, user);
});

//2ª - Criar o middleware para interferir na rota desejada.
export const bearerStrategyAuth:RequestHandler = (req, res, next) => {
    const authReques = passport.authenticate('bearer',
        (err: any, user: User | false) => {
            if (user) {
                req.user = user;
                return next();
            }
            return res.status(401).json({message: 'Acesso negado!'});
        });
    authReques(req, res, next);
}