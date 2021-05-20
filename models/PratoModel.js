// Import mongoose
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

let PratosSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        generated: true,
        auto:true
    },
    nome: {
        type: String,
        required: true,
        unique: true
    },
    ingredientes: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    }
});

// Exportar o modelo
module.exports = mongoose.model('Pratos', PratosSchema);
