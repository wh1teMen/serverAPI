let port = 3000;

let express = require('express');
let apiRouter = require('./routes/api.routes.js');

let app = express();
app.use(express.urlencoded());
app.use(express.static('./public'));
app.use('/api/v1',apiRouter);
const fs=require('fs');


app.get('/user', (req, res) => {
    
     });
app.listen(port, () => {
    console.log('server start...')
});