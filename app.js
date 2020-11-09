const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'kataclinicadental',
    password: ''
})

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

app.get('/', async(req,res) => {
    try {
        const db = await connection;
        const [appointments] = await db.execute(`SELECT * FROM appointments`);
        console.log(appointments);
        res.send({
            appointments
        });
    } catch (error) {
        res.status(500).send({
            message: 'There was a problem consulting the appointments'
        });
    }
});

//Customer endpoint routing
app.use('/customers', customersRouter);

//Appointment endpoint routing
app.use('/appointments', appointmentsRouter)


app.listen(PORT, () => console.log(`Server working at port ${PORT}`));