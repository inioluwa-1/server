const express = require('express')
require('dotenv').config();
const app = express()
const PORT = 3000;
const UserRouter = require('./Routes/user.route');
const cors = require('cors')
app.use(cors())
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb', extended: true}));
app.use(express.static('public'));

app.use('/', UserRouter)

app.listen(PORT, () => {
    console.log(`lift off.. server listening at http://localhost:${PORT}`);
})