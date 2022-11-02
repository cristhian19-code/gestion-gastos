const express = require('express');
const app = express();

app.set('port',2000)

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(app.get('port'), () => {
    console.log('Server running on port 3000');
})