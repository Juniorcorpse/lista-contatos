import { Strategy as LocalStrategy } from "passport-local";
import { createUserJWT, createUserToken, findUserByEmailAndPass } from "../services/user";
import { User } from "../types/user";
import { RequestHandler } from "express";
import passport from "passport";

type LocalStrategyResponse = { 
   auth:  {token: string},
    user: User; 

};

//1ª - Criar a estrategia de autenticação.
export const localStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    console.log('email:', email);
    console.log('password:', password);

    const user = await findUserByEmailAndPass(email, password);
    if (!user) {
        return done(null, false);        
    }
    //const token = createUserToken(user);//sem jwt
    const token = createUserJWT(user);
    const response: LocalStrategyResponse = {
        auth: {token},
        user
    };
    return done(null, response);
});

//2ª - Criar o middleware para interferir na rota desejada.
export const localStrategyAuth:RequestHandler = (req, res, next) => {
   const authReques = passport.authenticate('local',
    (err: any, response: LocalStrategyResponse | false) => {
        if(response){
            req.user = response.user;
            req.authInfo = response.auth;
            return next();
        }
        return res.status(401).json({message: 'Acesso negado!'});
    });

   authReques(req, res, next);
}