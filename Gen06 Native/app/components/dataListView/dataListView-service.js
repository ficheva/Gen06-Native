'use strict';
var _,

    _consts,
    dataService = require('../../providers/gen06Backend-data-provider'),

    // additional requires
    consts;

function Service() {}

function onRequestSuccess(data) {
    return data.result;
}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

Service.prototype.getAllRecords = function(args) {
    var data = dataService.data('Activities'),
        expandExp = {};

    return data.expand(expandExp).get()
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
};

// additional properties

module.exports = new Service();