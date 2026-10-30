import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./routes";
import { localStrategy } from "./libs/passport-local";
import passport from "passport";

const server = express();
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname, '../public')));

passport.use(localStrategy);
server.use(passport.initialize());

server.use('/', router);

server.listen(3000, () =>{
    console.log('Servidor Rodando em: http://localhost:3000/')
});