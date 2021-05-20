// Import mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let RestaurantesSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        generated: true,
        auto:true
    },
    nome: {
        type: String,
        required: true
    },
    localizacao: {
        type: String,
        required: true
    },
    pratos: {
        type: Array,
        required: true,
        default: []
    }
});

//Exportar o modelo
module.exports = mongoose.model('Restaurantes', RestaurantesSchema);
