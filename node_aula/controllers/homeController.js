exports.index = (req, res) => {
    res.status(200).render('cadastrar/form', { // Renderiza views/cadastrar/form.ejs
      title: 'MVC com Express', 
      message: 'Bem-vindo à aplicação MVC!' 
    });
  };
  
  exports.cadastrou = (req, res) => {
    res.status(200).render('cadastrar/form', { // Renderiza views/cadastrar/form.ejs
      title: 'MVC com Express',
      message: 'voce cadastrou!' 
    });
  };
  
  exports.usuario = (req, res) => {
    const usuarioId = req.params.id;
    res.status(200).json({ 
      id: usuarioId, 
      nome: 'Usuário Exemplo' 
    });
  };