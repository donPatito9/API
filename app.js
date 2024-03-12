//variables requeridas
var express =require('express')
var cors = require('cors')
/*Call paciente routes*/
var routes = require('./paciente/routes')
/*create HTTP server*/
var app = express()
//midlewares
app.get('/', (req,res)=> {
    //muestra mensaje en postman
    return res.send("Welcome ,Hola MR Robinson Server Running")
})
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//setup cors
app.use(cors())

app.use('/api', routes)

app.listen(3000,()=>{
    console.log("Servidor para api corriendo")
})

module.exports = app