import { Router } from "express";
import { ContactsController, delContactController, newContactController } from "../controllers/contact";
import { privateRequest } from "../middlewares/auth";
import { localStrategyAuth } from "../libs/passport-local";
import { bearerStrategyAuth } from "../libs/passport-bearer";

const router = Router();

router.post('/contato', privateRequest, newContactController);
router.get('/contatos', ContactsController);
router.delete('/contato', privateRequest, delContactController);

router.post('/login', localStrategyAuth, async (req, res) => {
    res.json({
        user: req.user,
        auth: req.authInfo
    });
});

router.get('/private', bearerStrategyAuth, (req, res) => {
    res.json({message: 'Acesso permitido!'});
});

router.get('/privatejwt', (req, res) => {
    res.json({messageJWT: 'Acesso permitido!'});
});

export default router;