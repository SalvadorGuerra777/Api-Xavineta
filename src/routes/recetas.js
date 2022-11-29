const { Router } = require("express")

//const {cors} = require("cors")
const router = Router();
const recetas = require('../sample.json');
const_ = require('underscore');

//GET
router.get('/',(req,res)=>{
    res.json(recetas);
});
//post
router.post('/',(req,res)=>{
    const {title,calorias,puntuacion,descripcion}=req.body;
    if(title && calorias && puntuacion && descripcion){
        const id = recetas.length +1;
        const newReceta ={...req.body};
        recetas.push(newReceta);
        res.json(recetas); 
    res.json('recibido');
    }else{
        res.status(500).json({error: "Eror al insertar"});
    }
});
//PUT
router.put('/:id',(req, res)=>{
    const {id} =req.params;
    const {title, calorias, puntuacion, descripcion} =req.body;
    if(title && calorias && puntuacion && descripcion){
        _.each(recetas, (receta, i)=>{
            if(receta.id==id){
                receta.title = title;
                receta.calorias = calorias;
                receta.puntuacion =puntuacion;
                receta.descripcion =descripcion;

            }
        });
        res.json(recetas);
    }else{
        res.status(500).json({error: "HUBO UN ERROR"});
    }
    
})
//delete
router.delete('/:id',(req, res) =>{
    const {id} =req.params;
_.each(recetas,(receta,i)=>{
    if(receta.id == id){
        recetas.splice(i,1);
    }
});
    res.send('recetas');

});
module.exports = router;