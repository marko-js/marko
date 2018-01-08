const expect = require('chai').expect;

exports.test = function (done) {
    // should be able to register for multiple express instances

    const express = require('express');
    // test res.marko is added to the real express response
    require('marko/express');
    expect(express.response.marko).to.be.a('function');

    // set up an express mock object and hijack require
    var expressMock = { response: {} };
    var _require = module.require;

    module.require = function () {
        if (arguments[0] === 'express') return expressMock;
        return _require.apply(module, arguments);
    };

    // check that res.marko is added to the mocked expressß response
    require('marko/express');
    expect(expressMock.response.marko).to.be.a('function');

    // return require to its original state
    module.require = _require;
    done();
};