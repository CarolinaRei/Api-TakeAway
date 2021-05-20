'use strict';

const UtilizadorModel = require("../models/UtilizadorModel");

/**
 * Apagar Utilizador
 * Apaga utilizador
 *
 * idUtilizador String 
 * no response value expected for this operation
 **/
exports.deleteUtilizador = function(idUtilizador) {
  return new Promise(function(resolve, reject) {
    UtilizadorModel.deleteOne({_id: idUtilizador}).then(
      function (){
        resolve("Utilizador apagado")
      },
      function (){
        reject("Falha a apagar utilizador.")
      })
  });
}

/**
 * Obter Utilizador
 * Devolve uma informaçao utilizador que possui o ID fornecido.
 *
 * idUtilizador String 
 * returns Utilizador
 **/
exports.getUtilizador = function(idUtilizador) {
  return new Promise(function(resolve, reject) {
    UtilizadorModel.findOne({_id:idUtilizador}).exec(function(err,utilizador){
        if(err!==null){
          reject(err)
        }

        resolve(utilizador)
    })
  });
}


/**
 * Actualizar Utilizador
 * Actualiza a informação de um utilizador existente.
 *
 * body Body Put user properties to update. (optional)
 * idUtilizador String 
 * returns Utilizador
 **/
exports.putUtilizador = function(body,idUtilizador) {
  return new Promise(function(resolve, reject) {
    UtilizadorModel.findOne({_id:idUtilizador}).exec(function(err,utilizador){
        if(err!==null){
          reject(err)
        }

        var actualizado = false
        
        if(utilizador.primeiroNome!=body.primeiroNome){
          utilizador.primeiroNome = body.primeiroNome
          actualizado =true
        }

        if(utilizador.ultimoNome!=body.ultimoNome){
          utilizador.ultimoNome = body.ultimoNome
          actualizado =true
        }

        if(utilizador.email!=body.email){
          utilizador.email = body.email
          actualizado =true
        }

        if(utilizador.dataDeNascimento!=body.dataDeNascimento){
          utilizador.dataDeNascimento = body.dataDeNascimento
          actualizado =true
        }

        if(utilizador.emailVerificado!=body.emailVerificado){
          utilizador.emailVerificado = body.emailVerificado
          actualizado =true
        }

        if(utilizador.dataDeCriacao!=body.dataDeCriacao){
          utilizador.dataDeCriacao = body.dataDeCriacao
          actualizado =true
        }

        if(actualizado==false){
          reject("Sem dados que necessitem ser actualizados")
        }


        utilizador.save()
        resolve(utilizador)
    })
  });
}

/**
 * Criar Novo Utilizador
 * Cria um novo utilizador.
 *
 * body Body_1 Envia os dados necessarios para que a API consiga criar um novo utilizador. (optional)
 * returns Utilizador
 **/
exports.postUtilizador = function(body) {
  return new Promise(function(resolve, reject) {
    UtilizadorModel.create(body).then(doc => resolve(doc),err=>reject(err))
  });
}