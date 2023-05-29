module.exports = mongoose =>{
    var schemaUser = mongoose.Schema({
        // id: {
        //     type: Number,
        //     require: true
        // },
        name: {
            type: String,
            require: true
        },
        strength:{
            type: String,
            require: true
        }
    })

    schemaUser.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;

        
    });

let Hero = mongoose.model('Hero',schemaUser);
return Hero
}