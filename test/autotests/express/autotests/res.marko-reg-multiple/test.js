const expect = require('chai').expect;

exports.test = function(done) {
  // should not register the res.marko function multiple times
  const express = require('express');
  require('marko/express');

  const fn = express.response.marko;

  require('marko/express');

  expect(express.response.marko).to.equal(fn);
  done();
};
