module.exports.getUtilizador = function getUtilizador (req, res, next, idUtilizador) {
    Utilizador.getUtilizador(idUtilizador)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};

module.exports.putUtilizador = function putUtilizador (req, res, next, body, idUtilizador) {
Utilizador.putUtilizador(body, idUtilizador)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};

module.exports.postUtilizador = function postUtilizador (req, res, next, body) {
Utilizador.postUtilizador(body)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};