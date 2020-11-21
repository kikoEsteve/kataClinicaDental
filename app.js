const express = require('express');
const appointmentsRouter = require('./routes/appointments');
const usersRouter = require('./routes/users');
const app = express();
const port = process.env.PORT || 3000;

//Evitamos undefined en el req.body
app.use(express.json());

//Evitamos error CORS
app.use(function(req,res,next) {
    //Permitimos hacer peticiones desde cualquier orígen
    res.header('Access-Control-Allow-Origin','*');
    //Permitimos peticiones con cabeceras enumeradas
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requester-With, Content-Type, Accept');
    next();
});

//Customer endpoint routing
app.use('/users', usersRouter);

//Appointment endpoint routing
app.use('/appointments', appointmentsRouter)


// app.listen(process.env.PORT || 3000)
app.listen(port, () => console.log(`Server working at port ${port}`));
// app.listen(PORT, () => console.log('Server running at port ' + PORT));