'use strict';

const PratoModel = require("../models/PratoModel");


/**
 * Apagar Prato
 * Apaga pratos atraves do nome
 *
 * nome String Nome do prato
 * no response value expected for this operation
 **/
exports.deletePratos = function(nome) {
  return new Promise(function(resolve, reject) {
    PratoModel.deleteOne({nome: nome}).then(
      function (){
        resolve("Prato apagado")
      },
      function (){
        reject("Falha a apagar prato.")
      })
  });
}


/**
 * Obter Pratos
 * Obter pratos atraves do nome
 *
 * nome String Nome do prato
 * returns Prato
 **/
exports.getPratos = function(nome) {
  return new Promise(function(resolve, reject) {
    PratoModel.findOne({nome:nome}).exec(function(err,prato){
        if(err!==null){
          reject(err)
        }

        resolve(prato)
    })
  });
}


/**
 * Actualizar Prato
 * Actualiza pratos
 *
 * nome String Nome do prato
 * no response value expected for this operation
 **/
exports.putPratos = function(body,nome) {
  return new Promise(function(resolve, reject) {
    PratoModel.findOne({nome:nome}).exec(function(err,prato){
        if(err!==null){
          reject(err)
        }

        var actualizado = false

        if(prato.nome!=body.nome){
          prato.nome = body.nome
          actualizado =true
        }

        if(prato.ingredientes!=body.ingredientes){
          prato.ingredientes = body.ingredientes
          actualizado =true
        }

        if(prato.preco!=body.preco){
          prato.preco = body.preco
          actualizado =true
        }

        if(actualizado==false){
          reject("Sem dados que necessitem ser actualizados")
        }

        prato.save()

        resolve(prato)
    })
  });
}


/**
 * Criar Prato
 * Cria Pratos
 *
 * returns Prato
 **/
exports.postPrato = function(body) {
  return new Promise(function(resolve, reject) {
    PratoModel.create(body).then(doc => resolve(doc),err=>reject(err))
  });
}