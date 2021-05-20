module.exports.getPedido = function getPedidos (req, res, next, idPedido) {
    Pedido.getPedidos(idPedido)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};
module.exports.putPedido = function putPedidos (req, res, next, body, idPedido) {
Pedido.putPedidos(body,idPedido)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};
module.exports.postPedido = function postPedido (req, res, next,body) {
Pedido.postPedido(body)
    .then(function (response) {
    utils.writeJson(res, response);
    })
    .catch(function (response) {
    utils.writeJson(res, response);
    });
};