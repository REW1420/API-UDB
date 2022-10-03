const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 9000
require("dotenv").config();
const route = require("./routes/user")

//middleware
app.use(express.json());
app.use('/api/', route);
//routes
app.get('/',(req,res) =>{
    res.send('Api')
});

// conexion

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('conexion exitosa a MongoDB'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('En linea',port));

