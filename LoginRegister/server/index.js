// Dependências
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// Configurar o uso do parser JSON e CORS
app.use(express.json());
app.use(cors());

// Iniciar o servidor e ouvir na porta 3002
app.listen(3002, () => {
  console.log("O server está funcionando");
});

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "plant",
});

// Conectar-se ao banco de dados MySQL
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar-se ao banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados!");
  }
});

// Rota para lidar com o registro de usuários
app.post("/register", (req, res) => {
  // Extrair as variáveis do formulário no corpo da requisição
  const sentEmail = req.body.email;
  const sentUserName = req.body.userName; // Corrigido para 'userName'
  const sentPassword = req.body.password;

  // Criar uma instrução SQL para inserir o usuário na tabela 'users'
  const SQL = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)";
  // Entrar com os valores usando uma variável
  const values = [sentEmail, sentUserName, sentPassword];

  // Consulta para executar a instrução SQL acima
  db.query(SQL, values, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send({ error: "Internal Server Error" });
      return;
    }

    console.log("Usuário cadastrado com sucesso");
    res.send({ message: "User added" });
  });
});

// Rota para lidar com o registro de usuários
app.post("/login", (req, res) => {
  // Extrair as variáveis do formulário no corpo da requisição
  const sentLoginUserName = req.body.LoginuserName; // Corrigido para 'userName'
  const sentLoginPassword = req.body.Loginpassword;

  // Criar uma instrução SQL para inserir o usuário na tabela 'users'
  const SQL = "SELECT * FROM users WHERE username = ? && password = ?";
  // Entrar com os valores usando uma variável
  const values = [sentLoginUserName, sentLoginPassword];

  // Consulta para executar a instrução SQL acima

  db.query(SQL, values, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send({ error: "Internal Server Error" });
      return;
    }

    if (results.length > 0) {
      res.send(results);
      return;
    } else {
      res.send({ message: "Credentials Don't match" });
      console.log("Credentials Don't match");

      return;
    }
  });
});

//CRUD QUE ESTÁ NO DASHBOARD

app.get("/", (req, res) => {
  const sql = "SELECT * FROM usuarios";
  db.query(sql, (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO usuarios (`Nome`, `Email`, `Datanascimento`)VALUES (?) ";
  const values = [req.body.nome, req.body.email, req.body.datanascimento];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});

app.put("/update/:id", (req, res) => {
  const sql =
    "update usuarios set `Nome` = ?,` Email` = ?, `Datanascimento` = ? where ID =?";
  const values = [req.body.nome, req.body.email, req.body.datanascimento];

  const id = req.params.id;

  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});

app.delete("/update/:id", (req, res) => {
  const sql = "DELETE FROM usuarios WHERE ID = ?";

  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});
