require('dotenv').config();
const express = require('express'),
      ctrl = require('./controller'),
      massive = require('massive'),
      { SERVER_PORT, CONNECTION_STRING } = process.env,
      app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.use(express.json());

app.get('/api/inventory', ctrl.getProducts)
app.post('/api/product', ctrl.create)

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))