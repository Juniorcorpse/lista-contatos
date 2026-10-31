### Adicionado o `passport` para controle de acesso as rotas

```sh
npm i passport
```

```sh
npm i @types/passport-local
```


- Criar uma `localStrategy`.

### Nas configurações de `server.ts`.
-- Adicionar a estrategia no `passport`.
```sh
passport.use(localStrategy);
```

- Inicializer o `passport`.
```sh
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
-- Adicionar a estrategia no `passport`.
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

-- Biblioteca responsalvel por criar e verificar `jwt` token.
```sh
npm i jsonwebtoken
```
- Em `.env` cria variavel de ambiente.
-- Chave secreta (HASH) para geração de tokens JWT
```sh
JWT_KEY="mySecretKey"
```
## Nas configurações de `server.ts`.
-- Adicionar a estrategia no `passport`.
```sh
passport.use(jwtStrategy);
```