module.exports = rs => { // EXPORTING THE ROUTES
    const router = require("express").Router();
    const controller = require('../controller/hero.controller')
    

    router.post('/register', controller.create); //ADD USER

    router.get('/', controller.getAll); //GET ALL USERS

    router.delete('/', controller.deleteAll); //DELETE ALL USERS

    router.put('/:id', controller.update) //UPDATE ONE USERS

    router.delete('/:id', controller.deleteOne) // DELETE A USER

     router.get('/:id', controller.getOne)


rs.use('/v1/hero',router);    
}