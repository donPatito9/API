var mongoose = require('mongoose')
var app = require('./app')

//var port = 3000

//mongoose.set('useFindAndModify', false)

mongoose.connect('mongodb://localhost:27017/paciente',{ useNewUrlParser: true , useUnifiedTopology:true}
    ).then(() => {
                console.log('*****************')
                console.log('MongoDB Conectado')
                console.log('*****************')
                console.log('eva numero Uno**')
                console.log('Programacion')
                console.log('Multiplataforma')
                console.log('Nativa')
                console.log('Robinson Concha')
                console.log('*****************')

})

