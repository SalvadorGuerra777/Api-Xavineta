const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan')
app.use(cors());
//ssetting
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewarews
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//ROUTES
app.use(require('./routes/index'));
app.use('/api/recetas',require('./routes/recetas'));

//startin the server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});

