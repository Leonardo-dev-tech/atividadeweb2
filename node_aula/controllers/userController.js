// userController.js

// Importe os modelos necessários
const userModelOracle = require('../models/userModel_oracle');
const userModelTransaction = require('../models/UserModelTransation');

// Função para buscar um usuário pelo ID (usando userModel_oracle.js)
async function getUserById(req, res) {
    try {
        const userId = req.params.id;
        const user = await userModelOracle.findUserById(userId);
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar usuário');
    }
}

// Função para salvar uma transação de usuário (usando UserModelTransation.js)
async function saveUserTransaction(req, res) {
    try {
        const userData = req.body;
        const result = await userModelTransaction.saveUserTransaction(userData);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao salvar transação do usuário');
    }
}

// Função para listar usuários (usando userModel_oracle.js)
async function list(req, res) {
    try {
        const users = await userModelOracle.findAllUsers();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao listar usuários');
    }
}

// Função para criar um novo usuário (usando userModel_oracle.js)
async function create(req, res) {
    try {
        const userData = req.body;
        const result = await userModelOracle.createUser(userData);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao criar usuário');
    }
}

// Função para excluir um usuário (usando userModel_oracle.js)
async function deleteUser(req, res) {
    try {
        const userId = req.params.id;
        const result = await userModelOracle.deleteUser(userId);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao excluir usuário');
    }
}

// Função para atualizar um usuário (usando userModel_oracle.js)
async function update(req, res) {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const result = await userModelOracle.updateUser(userId, userData);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar usuário');
    }
}

// Função para exibir o formulário de criação de usuário
async function showCreateForm(req, res) {
    try {
        res.render('cadastrar/form');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao exibir formulário de criação');
    }
}

// Função para exibir o formulário de edição de usuário
async function showEditForm(req, res) {
    try {
        res.render('cadastrar/form');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao exibir formulário de edição');
    }
}

module.exports = {
    getUserById: getUserById,
    saveUserTransaction: saveUserTransaction,
    list: list,
    create: create,
    deleteUser: deleteUser,
    update: update,
    showCreateForm: showCreateForm,
    showEditForm: showEditForm
};