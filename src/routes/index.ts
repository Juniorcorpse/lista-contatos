import { Router } from "express";
import { createContact, deleteContact, getContacts } from "../services/contact";


const router = Router();

router.post('/contato', async (req, res) => {
    const {name} = req.body;
    if (!name || name.length < 2) {
         res.status(409).json({error:'Nome precisa ter pelomenos 2 caracteres.'});
         return;
    }
    //processamento dos dados
    await createContact(name);

    res.status(201).json({contato:name})
});

router.get('/contatos', async (req, res) =>{
    let list = await getContacts();
    res.json({contatos: list});
});

router.delete('/contato', async (req, res) =>{
    const {name} = req.query;
    if (!name) {
       res.status(409).json({erro: "Precisa mandar um nome"});
       return;
    }
    await deleteContact(name as string);
    res.json({contato:name});
});

export default router;