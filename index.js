const express = require('express');
const app = express();
const { port } = require('./Config/Config')
const indexRouter = require('./Routes/IndexRoute')

app.use(express.json());
app.use(express.urlencoded({ urlencoded: false }))
app.use(indexRouter)

const PORT = port || 4000
app.listen(PORT, () => {
    console.log(`Server is Running on Port No:- ${PORT}`);
}) 