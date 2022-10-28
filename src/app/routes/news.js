const dbConnection = require('../../dbConnection');

module.exports = app => {


  console.log("Hello world!");
  const connection = dbConnection();

app.get('/news', (req, res) => {
    connection.query('SELECT * FROM peliculas', (err, result) => {
      
      console.log(result);

    res.render('news', {
        news: result
    });

    });

  });

  app.get('/news', (req, res) => {
    connection.query('SELECT * FROM clientes', (err, result) => {
      
      console.log(result);

    res.render('news', {
        clientes: result
    });

    });

  });

//var sql = "insert into peliculas(id_pelicula,titulo,año,critica,caratula) values (78,'kingkong',2001,'excelente','verde')";

 app.post('/news', (req, res) => {
  const { id_pelicula, titulo,año,critica,caratula } = req.body;
  connection.query('INSERT INTO peliculas SET ? ',

    {
      id_pelicula,
      titulo,
      año,
      critica,
      caratula

    }

  , (err, result) => {
    res.redirect('/news');
  });

});

app.post('/news', (req, res) => {
  const {       cod_cliente,
      dni,
      nombre,
      apellido1,
      apellido2,
      direccion,
      email } = req.body;
  connection.query('INSERT INTO clientes SET ? ',

    {
      cod_cliente,
      dni,
      nombre,
      apellido1,
      apellido2,
      direccion,
      email

    }

  , (err, result) => {
    res.redirect('/news');
  });

});


};
