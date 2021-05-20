// Import mongoose
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

let UtilizadoresSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        generated: true,
        auto:true
    },
    primeiroNome: {
        type: String,
        required: true
    },
    ultimoNome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    dataDeNascimento: {
        type: String,
        required: true
    },
    emailVerificado: {
        type: Boolean,
        required: true
    },
    dataDeCriacao: {
        type: String,
        required: false,
        default: Date.now()
    },
});

//Exportar o modelo
module.exports = mongoose.model('Utilizadores', UtilizadoresSchema);
