//Usando objeto express
const express = require('express')
// App de Express
const app = express()
// Puerto en que vamos a ver la app: localhost:3000
const port = 3000

// path inicial, respondera a la url localhost:3000 
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Inicializa la app 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Agregando otra ruta respondiendo texto
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})

// Regresando un objeto 
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

// Query params: Recibir parametros por la url 

app.get('/explorers/:explorerName', (req,res) => {
    req.params = {"explorerName": "Edder"}
    res.send(req.params)
})