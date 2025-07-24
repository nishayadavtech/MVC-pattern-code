const express = require ('express');
const app = express();
const port = 5500;
app.use(express.json());
const Bankroutes = require('./Routes/mybankRoutes/mybankroutes');
// const dotenv = require('dotenv');
// dotenv.config();

app.use('/', Bankroutes)
// app.use('/', productsroute)


app.listen(port, () =>{
    console.log(`server is running on port${port}`)
})