'use strict';

const PedidoModel = require("../models/PedidoModel");

/**
 * Apagar Pedido
 * Apaga o pedido
 *
 * idPedido String 
 * no response value expected for this operation
 **/
exports.deletePedidos = function(idPedido) {
  return new Promise(function(resolve, reject) {
    PedidoModel.deleteOne({_id: idPedido}).then(
      function (){
        resolve("Pedido apagado")
      },
      function (){
        reject("Falha a apagar pedido.")
      })
  });
}


/**
 * Obter Pedido
 * Pedido encontrado
 *
 * idPedido String 
 * no response value expected for this operation
 **/
exports.getPedidos = function(idPedido) {
  return new Promise(function(resolve, reject) {
    PedidoModel.findOne({_id:idPedido}).exec(function(err,pedido){
        if(err!==null){
          reject(err)
        }

        resolve(pedido)
    })
  });
}


/**
 * Actualizar Pedido
 * Actualiza o pedido
 *
 * idPedido String 
 * returns Pedido
 **/
exports.putPedidos = function(body,idPedido) {
  return new Promise(function(resolve, reject) {
    PedidoModel.findOne({_id:idPedido}).exec(function(err,pedido){
        if(err!==null){
          reject(err)
        }

        var actualizado = false

        if(pedido.restaurante!=body.restaurante){
          pedido.restaurante = body.restaurante
          actualizado =true
        }

        if(pedido.utilizador!=body.utilizador){
          pedido.utilizador = body.utilizador
          actualizado =true
        }

        if(pedido.dataEntrada!=body.dataEntrada){
          pedido.dataEntrada = body.dataEntrada
          actualizado =true
        }

        if(pedido.dataSaida!=body.dataSaida){
          pedido.dataSaida = body.dataSaida
          actualizado =true
        }

        if(pedido.pratos!=body.pratos){
          pedido.pratos = body.pratos
          actualizado =true
        }

        if(pedido.totalAPagar!=body.totalAPagar){
          pedido.totalAPagar = body.totalAPagar
          actualizado =true
        }

        if(actualizado==false){
          reject("Sem dados que necessitem ser actualizados")
        }


        pedido.save()
        resolve(pedido)
    })
  });
}


/**
 * Criar Pedido
 * Cria Pedido
 *
 * returns Pedido
 **/
exports.postPedido = function(body) {
  return new Promise(function(resolve, reject) {
    PedidoModel.create(body).then(doc => resolve(doc),err=>reject(err))
  });
}