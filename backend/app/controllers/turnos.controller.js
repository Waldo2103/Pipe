const Turnos = require('../models/turnos.model.js');


// POST a Turnos
exports.create = (req, res) => {
    // Create a Turnos
    const turnos = new Turnos(req.body);

    // Save a Turnos in the MongoDB
    turnos.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
};


// Traigo todos los turnos y
exports.findAll = (req, res) => {
    Turnos.find()
    .then(turnos => {
        res.json(turnos);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};


// Sacar Turno
exports.sacarTurno = (req, res) => {
    //Se trae ultimo turno para cola solicitada
    Turnos.find({cola:{$in:[req.params.colaId]}}).sort({$natural:-1}).limit(1)
    .then(turnos => {
     let newTurno = {
         turno: turnos[0].turno + 1,
         cola: turnos[0].cola,
         atendido: false
     } 
    //Se agrega turno en colección
    const turno = new Turnos(newTurno);

    // Guardo nuevo turno
    turno.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).json({
                msg: err.message
            });
        });
        res.json(newTurno);

    }).catch(err => {
        return res.status(404).json({
            msg: "La cola ingresada no existe (" + req.params.colaId + ")"
        });
    });
};

// Atender próximo
exports.findNext = (req, res) => {
    let filter = {atendido:{$in:[false]}};
    let update = {atendido:true};
    Turnos.findOneAndUpdate(filter, update).sort({$natural:1})
    .then(turno => {
        if (turno === null) {
            return res.status(404).json({
                msg: "No hay mas turnos "
            });
        }
        res.json(turno);
    }).catch(err => {
        return res.status(500).json({
            msg: "Error: " + err
        });
    });
};

// UPDATE a Turnos
exports.update = (req, res) => {
    // Find turnos and update it
    Turnos.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(turnos => {
        if(!turnos) {
            return res.status(404).json({
                msg: "Turnos not found with id " + req.params.colaId
            });
        }
        res.json(turnos);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Turnos not found with id " + req.params.colaId
            });                
        }
        return res.status(500).json({
            msg: "Error updating turnos with id " + req.params.colaId
        });
    });
};

// DELETE a Turnos
exports.delete = (req, res) => {
    Turnos.findByIdAndRemove(req.params.colaId)
    .then(turnos => {
        if(!turnos) {
            return res.status(404).json({
                msg: "Turnos not found with id " + req.params.colaId
            });
        }
        res.json({msg: "Turnos deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).json({
                msg: "Turnos not found with id " + req.params.colaId
            });                
        }
        return res.status(500).json({
            msg: "Could not delete turnos with id " + req.params.colaId
        });
    });
};