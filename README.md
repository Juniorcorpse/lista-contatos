# Adicionado o `passport` para controle de acesso as rotas

```sh
npm i passport
```

```sh
npm i @types/passport-local
```
```sh
npm install dotenv
```
- Depois, coloque esta linha no início de `server.ts`, antes dos outros imports:

```js
import "dotenv/config";
```
- Ou ajustar o script dev em package.json para carregar o arquivo:
```sh
"dev": "node --env-file=.env --import=tsx --watch src/server.ts"
```

- Criar uma `localStrategy`.

### Nas configurações de `server.ts`.
- Adicionar a estrategia no `passport`.
```js
passport.use(localStrategy);
```

- Inicializer o `passport`.
```js
server.use(passport.initialize());
```

### Configurações para validar `Tokens`.
```sh
npm i passport-http-bearer
```

```sh
npm i -D @types/passport-http-bearer
```

- Criar uma `bearerStrategy` adicionar no `passport`

### Nas configurações de `server.ts`.
- Adicionar a estrategia no `passport`.
```sh
passport.use(bearerStrategy);
```

### Autenticação usando `JWT` (Json Web Token).

```sh
npm i passport-jwt
```
```sh
npm i -D @types/passport-jwt
```

- Biblioteca responsalvel por criar e verificar `jwt` token.
```sh
npm i jsonwebtoken
```
- Em `.env` cria variavel de ambiente.
- Chave secreta (HASH) para geração de tokens JWT
```sh
JWT_KEY="mySecretKey"
```
### Nas configurações de `server.ts`.
- Adicionar a estrategia no `passport`.
```js
passport.use(jwtStrategy);
```