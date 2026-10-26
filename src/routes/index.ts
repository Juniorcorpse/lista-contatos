import { Router } from "express";
import { ContactsController, delContactController, newContactController } from "../controllers/contact";
import { privateRequest } from "../middlewares/auth";

const router = Router();

router.post('/contato', privateRequest, newContactController);
router.get('/contatos', ContactsController);
router.delete('/contato', privateRequest, delContactController);

export default router;