// Configuração do drive
const { Client  } = require('pg')
const mySecret = process.env['DATABASE']

// Banco de dados em Postgress --> elephantsql.com <-- totalmente 0800
const db = new Client(mySecret);

db.connect().then(()=>{
  console.log('Conexão feita com sucesso!')
}).catch((error)=>{
  console.error('Falha na conexão: '+error)
})

module.exports = db