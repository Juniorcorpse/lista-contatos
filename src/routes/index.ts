import { Router } from "express";
import { ContactsController, delContactController, newContactController } from "../controllers/contact";
import { privateRequest } from "../middlewares/auth";
import { localStrategyAuth } from "../libs/passport-local";

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

export default router;