const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

const Usuario = require('./app/models/usuario.model.js');
const Turnos = require('./app/models/turnos.model.js');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB.");    
//Elimini listado inicial para que no se pise
    Usuario.remove({}, function(err) { 

       if(err){
          console.log(err);
          process.exit();
       }
       
       console.log('Usuario collection removed');
       // -> initial new data
       //initial();
    });

    Turnos.remove({}, function(err) { 

      if(err){
         console.log(err);
         process.exit();
      }
      
      console.log('Turnos collection removed');
      // -> initial new data
      initial();
   });

}).catch(err => {
    console.log('Could not connect to MongoDB.', err);
    process.exit();
});

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions))

require('./app/routes/usuario.routes.js')(app);
require('./app/routes/turnos.routes.js')(app);

// Create a Server
const server = app.listen(8080, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})

function initial(){
 
    let usuarios = [
      {
        usuario: "Wal",
        contrasenia: "222222"
      },
      {
        usuario: "Cris",
        contrasenia: "111111"
      },
      {
        usuario: "Lu",
        contrasenia: "444444"
      }
      
    ]
   
    // Init data -> save to MongoDB

    for (let i = 0; i < usuarios.length; i++) { 
        const usuario = new Usuario(usuarios[i]);
        usuario.save();
    }

    //Agrego turnos
    let turnos = [
      {
        turno: 0,
        cola: "A",
        atendido: true
      },
      {
        turno: 0,
        cola: "B",
        atendido: true
      },
      {
        turno: 0,
        cola: "C",
        atendido: true
      }
    ]
    for (let i = 0; i < turnos.length; i++) { 
      const turno = new Turnos(turnos[i]);
      turno.save();
  }

    console.log(">>> Done - Initial Data!");
}