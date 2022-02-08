const express = require('express');
const app = express();
const { port, connection } = require('./Config/Config')
const indexRouter = require('./Routes/IndexRoute')

connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");

})
app.use(express.json());
app.use(express.urlencoded({ urlencoded: false }))
app.use(indexRouter)

const PORT = port || 4000
app.listen(PORT, () => {
    console.log(`Server is Running on Port No:- ${PORT}`);
}) 