const express = require('express');

const AccountsModel = require('./data/accounts-model');

const server = express();

// your code here
server.use(express.json());

server.get('/', async (req, res) => {
    try {
        const accounts = await AccountsModel.find();
        res.status(200).json(accounts);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Error finding accounts' });
    }
});

server.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const find = await AccountsModel.findById(id);
        res.status(200).json(find);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Error finding account with that ID' });
    }
});

server.post('/', async (req, res) => {
    try {
        const account = await AccountsModel.add(req.body);
        res.status(201).json(account);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Error posting content' });
    }
});

server.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const changes = req.body;
        const updated = await AccountsModel.update(id, changes);
        res.status(200).json(updated);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Error updating account' });
    }
});

server.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await AccountsModel.remove(id);
        res.status(200).json(deleted);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Error deleting account' });
    }
});

module.exports = server;
