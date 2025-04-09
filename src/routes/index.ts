import { isUtf8 } from "buffer";
import { Router } from "express";
import { readFile, writeFile } from "fs/promises";

const dataSource = './data/list.txt';
const router = Router();

router.post('/contato', async (req, res) => {
    const {name} = req.body;
    if (!name || name.length < 2) {
         res.status(409).json({error:'Nome precisa ter pelomenos 2 caracteres.'});
         return;
    }

    //processamento dos dados
    let list: string[] = [];
    try {
        const data = await readFile(dataSource, {encoding:'utf8'});
        list = data.split('\n');

    } catch (error) {}

    list.push(name);
    await writeFile(dataSource, list.join('\n'));

    res.status(201).json({contato:name})
});

router.get('/contatos', async (req, res) =>{
    let list: string[] = [];
    try {
        const data = await readFile(dataSource, {encoding:'utf8'});
        list = data.split('\n');
    } catch (error) {}
    res.json({contatos: list});
});

router.delete('/contato', async (req, res) =>{
    const {name} = req.query;
    if (!name) {
       res.status(409).json({erro: "Precisa mandar um nome"});
       return;
    }
    let list: string[] = [];
    try {
        const data = await readFile(dataSource, {encoding:'utf8'});
        list = data.split('\n');
    } catch (error) {}

    list = list.filter( item => item.toLowerCase() !== (name as string).toLowerCase());
    await writeFile(dataSource, list.join('\n'));
    res.json({contato:name});
});

export default router;