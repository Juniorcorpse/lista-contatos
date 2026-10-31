import {ExtractJwt, Strategy as JWTStrategy} from  'passport-jwt';

const options ={
    //onde ele vai puxar o jwt
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //chave privada
    secretOrKey: process.env.JWT_KEY as string
}
//1ª - Criar a estrategia de autenticação.

export const jwtStrategy = new JWTStrategy(options, async (payload, done) =>{
    console.log('payload:', payload);
    
});
//2ª - Criar o middleware para interferir na rota desejada.