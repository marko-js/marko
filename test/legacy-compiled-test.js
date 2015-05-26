'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
var expect = require('chai').expect;
var nodePath = require('path');
var marko = require('../');

var fs = require('fs');

require('../node-require').install();

describe('marko/legacy-compiled' , function() {
    before(function() {
        require('../compiler').defaultOptions.checkUpToDate = false;
    });

    it('should allow an exports.create template to be loaded', function() {

        var template = require('marko').load({
            create: function(__helpers) {
              var escapeXml = __helpers.x;

              return function render(data, out) {
                out.w('Hello ' +
                  escapeXml(data.name) +
                  '!');
              };
            }
        });

        var output = template.renderSync({
            name: 'Frank'
        });

        expect(output).to.equal('Hello Frank!');
    });

    it('should only load an exports.create template once', function() {

        var compiled = {
            create: function(__helpers) {
              var escapeXml = __helpers.x;

              return function render(data, out) {
                out.w('Hello ' +
                  escapeXml(data.name) +
                  '!');
              };
            }
        };

        var template1 = require('marko').load(compiled);

        var output = template1.renderSync({ name: 'Frank' });
        expect(output).to.equal('Hello Frank!');

        var template2 = require('marko').load(compiled);

        expect(template1).to.equal(template2);
    });

    it('should allow a module.exports = function create() {} template to be loaded', function() {

        var template = require('marko').load(function create(__helpers) {
          var escapeXml = __helpers.x;

          return function render(data, out) {
            out.w('Hello ' +
              escapeXml(data.name) +
              '!');
          };
        });

        var output = template.renderSync({
            name: 'Frank'
        });

        expect(output).to.equal('Hello Frank!');
    });

    it('should only load a module.exports = function create() {} template once', function() {

        var compiled = function create(__helpers) {
          var escapeXml = __helpers.x;

          return function render(data, out) {
            out.w('Hello ' +
              escapeXml(data.name) +
              '!');
          };
        };

        var template1 = require('marko').load(compiled);

        var output = template1.renderSync({ name: 'Frank' });
        expect(output).to.equal('Hello Frank!');

        var template2 = require('marko').load(compiled);

        expect(template1).to.equal(template2);
    });

});
