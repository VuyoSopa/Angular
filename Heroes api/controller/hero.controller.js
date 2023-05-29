const db = require("../models")
const Hero = db.hero

//Get all heros
exports.getAll = (req, res) =>{


    Hero.find()
      .then(data =>{
        res.send(data)
        console.log(data)
      })
      .catch(error =>{
        res.status(500).send("Could not find hero",error)
        console.log("Could not find hero",error)
      })
}


exports.getOne = (req, res)=>{

    const id = req.params.id

    Hero.findById(id, { heroFindAndModify: false })
    .then(data =>{
      res.send(data)
      console.log(data)
    })
    .catch(error =>{
      res.status(500).send("Could not get one find hero",error)
      console.log("Could not find one hero",error)
    })
} 


//CREATE A hero
exports.create = async(req, res) =>{
    if(!req.body){
        res.status(400).send("Cannot add without info")
        return;
    }
    
    const hero = new Hero({
        id: req.body.id,
        name: req.body.name,
        strength: req.body.strength 
    }) 
    
    try{
        hero.save()
        .then(hero =>{

            console.log(hero)
            res.send(hero)
        })
        return
    }catch (err){
         res.status(500).send('Could not create a new hero')
         console.log(`Some err occured : ${err.message}`)
    }
}
    //Clear All
    exports.deleteAll = (req, res)=>{

      Hero.deleteMany()
      .then(data=>{
        res.send(data)
        console.log(data)
      })
      .catch(error=>{
        res.status(500).send("Could not delete all heroes", error)
        console.log("Could not delete all", error)
      })
}

//Delete a hero
exports.deleteOne = (req, res)=>{

    const id = req.params.id

    Hero.findByIdAndRemove(id, { heroFindAndModify: false })
      .then(data => {
         if(!data) {
            res.status(404).send({
                msg: `Cannot delete Hero with id=${id}. Maybe it was does not exist`
            })
         }else res.status(201).send({ msg: `Hero deleted successfully`})
      })
      .catch(err => {
        res.status(500).send({ msg: `Error deleting Hero with id=${id}, Error: ${err}`})
      })
}

//UPDATE A hero
exports.update = (req, res)=>{
    if(!req.body){
        res.status(400).send("Cannot update hero")
        return;
    }
    const id = req.params.id

    Hero.findByIdAndUpdate(id, req.body, { heroFindAndModify: false })
      .then(data => {
        if(!data) {
            res.status(404).send({
                msg: `Cannot update heroes with id=${id}. Maybe it was not found`
            })
        }else res.status(201).send({ msg: "Heroes was updated successfully."})
      })
      .catch(err => {
        res.status(500).send({ msg: `Error updating hero with id=${id} ${err}`})
      })
}