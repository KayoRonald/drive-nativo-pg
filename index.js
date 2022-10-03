const express = require('express')
const db = require('./database')
const cors = require('cors')

app = express()
// Configurações da aplicação
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async function(requeste, response){
  const users = await db.query('SELECT * FROM usuarios')
  console.log(users.rows)
  response.status(200).json(users.rows)
})

app.post('/criar', async function(requeste, response){
  const novoUsuario = requeste.body
  console.log(novoUsuario)
  response.status(201).json({
    success: true,
    message: 'Usuário criada com sucesso!'
  })
})
// Atualizar um usuário
// Deletar um usuário

app.listen(3000, function(){
  console.log('Rodando na porta 3000')
})