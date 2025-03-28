const express = require('express');
const app = express();
const methodOverride = require('method-override');
const homeRoutes = require('./node_aula/routes/homeRoutes');
const userRoutes = require('./node_aula/routes/userRoutes');
require('dotenv').config();
const path = require('path'); // Importe o módulo path

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'node_aula', 'views')); // Atualizado para apontar para o diretório correto

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/home', homeRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.listen(PORT, () => {
    console.log(`Servidor http://${HOST}:${PORT} com Express`);
});