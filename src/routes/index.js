const { Router} = require('express');
const router = Router();


router.get('/test',(req, res)=>{
    const data ={
        "name": "Chambita",
        "Website": "Healthy life"
    };
    res.json(data);


});
module.exports = router;

