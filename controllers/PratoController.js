module.exports.getPrato = function getPratos (req, res, next, nome) {
    Prato.getPratos(nome)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};

module.exports.putPrato = function putPratos (req, res, next, body, nome) {
Prato.putPratos(body,nome)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};

module.exports.postPrato = function postPrato (req, res, next, body) {
Prato.postPrato(body)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};