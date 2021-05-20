// Import mongoose
const mongoose = require('mongoose');
const restauranteModel = require('./RestauranteModel');
const utilizadorModel = require("./UtilizadorModel");

const Schema = mongoose.Schema;

let PedidosSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        generated: true,
        auto:true
    },
    restaurante: {
        type: restauranteModel.schema,
        required: true
    },
    utilizador: {
        type: utilizadorModel.schema,
        required: true
    },
    dataEntrada: {
        type: String,
        required: true
    },
    dataSaida: {
        type: String,
        required: true
    },
    pratos: {
        type: Array,
        required: true
    },
    totalAPagar: {
        type: Number,
        required: true
    }
});

//Exportar o modelo
module.exports = mongoose.model('Pedidos', PedidosSchema);
