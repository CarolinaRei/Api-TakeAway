module.exports.getRestaurante = function getRestaurante (req, res, next, idRestaurante) {
    Restaurante.getRestaurante(idRestaurante)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};

module.exports.putRestaurante = function putRestaurante (req, res, next, body, idRestaurante) {
Restaurante.putRestaurante(body,idRestaurante)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};

module.exports.postRestaurante = function postRestaurante (req, res, next, body) {
Restaurante.postRestaurante(body)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};