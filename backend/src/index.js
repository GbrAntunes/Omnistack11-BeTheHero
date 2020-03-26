const express = require('express')  // 'Importa' o express
const cors = require('cors')
const routes = require('./routes')

const app = express() // Instaância da aplicacao

app.use(cors())
app.use(express.json()) // Necessário para utilizar body params
app.use(routes)


app.listen(3333)    // Porta da aplicação. Para node, utilizar 3333