'use strict';
require('./patch-module');

var chai = require('chai');
chai.config.includeStack = true;
var expect = require('chai').expect;
var path = require('path');
var marko = require('../');
var autotest = require('./autotest');
var fs = require('fs');

require('../node-require').install();

describe('render', function() {
    var autoTestDir = path.join(__dirname, 'autotests/async-render');

    autotest.scanDir(
        autoTestDir,
        function run(dir, helpers, done) {
            var templatePath = path.join(dir, 'template.marko');
            var mainPath = path.join(dir, 'test.js');

            var main = fs.existsSync(mainPath) ? require(mainPath) : {};
            var loadOptions = main && main.loadOptions;

            if (main.checkError) {
                var e;

                try {
                    marko.load(templatePath, loadOptions);
                } catch(_e) {
                    e = _e;
                }

                if (!e) {
                    throw new Error('Error expected');
                }

                main.checkError(e);
                return done();
            } else {
                var template = marko.load(templatePath, loadOptions);
                var templateData = main.templateData || {};
                var out = marko.createWriter();
                var events = [];
                var eventsByFragmentName = {};

                var addEventListener = function(event) {
                    out.on(event, function(arg) {
                        var name = arg.id || arg.name;

                        if (!eventsByFragmentName[name]) {
                            eventsByFragmentName[name] = [];
                        }

                        eventsByFragmentName[name].push(event);

                        events.push({
                            event: event,
                            arg: arg
                        });
                    });
                };

                addEventListener('asyncFragmentBegin');
                addEventListener('asyncFragmentBeforeRender');
                addEventListener('asyncFragmentFinish');

                template.render(templateData, out, function(err, html) {
                    if (err) {
                        return done(err);
                    }

                    if (main.checkHtml) {
                        main.checkHtml(html);
                    } else {
                        helpers.compare(html, '.html');
                    }

                    if (main.checkEvents) {
                        main.checkEvents(events, helpers);
                    }

                    // Make sure all of the async fragments were correctly ended
                    Object.keys(eventsByFragmentName).forEach(function(fragmentName) {
                        var events = eventsByFragmentName[fragmentName];
                        expect(events).to.deep.equal([
                            'asyncFragmentBegin',
                            'asyncFragmentBeforeRender',
                            'asyncFragmentFinish'
                        ]);
                    });

                    done();
                });

                out.end();
            }
        });
});