import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./routes";
import { localStrategy } from "./libs/passport-local";
import passport from "passport";
import { bearerStrategy } from "./libs/passport-bearer";

const server = express();
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname, '../public')));

// Configuração do Passport
// strategy para logar
passport.use(localStrategy);
// strategy para verificar o token
passport.use(bearerStrategy);

server.use(passport.initialize());

server.use('/', router);

server.listen(3000, () =>{
    console.log('Servidor Rodando em: http://localhost:3000/')
});