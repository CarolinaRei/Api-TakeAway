'use strict';

const RestauranteModel = require("../models/RestauranteModel");


/**
 * Apagar Restaurante
 * Apagar restaurante
 *
 * idRestaurante String 
 * no response value expected for this operation
 **/
exports.deleteRestaurante = function(idRestaurante) {
  return new Promise(function(resolve, reject) {
    RestauranteModel.deleteOne({_id: idRestaurante}).then(
      function (){
        resolve("Restaurante apagado")
      },
      function (){
        reject("Falha a apagar restaurante.")
      })
  });
}


/**
 * Apagar Restaurante
 * Encontra restaurante
 *
 * idRestaurante String 
 * returns Restaurante
 **/
exports.getRestaurante = function(idRestaurante) {
  return new Promise(function(resolve, reject) {
    RestauranteModel.findOne({_id:idRestaurante}).exec(function(err,restaurante){
        if(err!==null){
          reject(err)
        }

        resolve(restaurante)
    })
  });
}


/**
 * Actualizar Restaurante
 * Actualiza Restaurante
 *
 * idRestaurante String 
 * returns Restaurante
 **/
exports.putRestaurante = function(body,idRestaurante) {
  return new Promise(function(resolve, reject) {
    RestauranteModel.findOne({_id:idRestaurante}).exec(function(err,restaurante){
        if(err!==null){
          reject(err)
        }

        var actualizado = false
        
        if(restaurante.nome!=body.nome){
          restaurante.nome = body.nome
          actualizado =true
        }

        if(restaurante.localizacao!=body.localizacao){
          restaurante.localizacao = body.localizacao
          actualizado =true
        }

        if(restaurante.pratos!=body.pratos){
          restaurante.pratos = body.pratos
          actualizado =true
        }

        if(actualizado==false){
          reject("Sem dados que necessitem ser actualizados")
        }


        restaurante.save()

        resolve(restaurante)
    })
  });
}


/**
 * Criar Novo Restaurante
 * Criação de restaurante
 *
 * body Restaurante  (optional)
 * returns Restaurante
 **/
exports.postRestaurante = function(body) {
  return new Promise(function(resolve, reject) {
    RestauranteModel.create(body).then(doc => resolve(doc),err=>reject(err))
  });
}