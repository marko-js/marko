'use strict';

require('../__util__/test-init');

var chai = require('chai');
chai.config.includeStack = true;
var expect = require('chai').expect;
var path = require('path');
var marko = require('../../');
var markoRuntimeHtml = require('marko/runtime/html');
var autotest = require('../autotest');
var fs = require('fs');

describe('async-fragments (deprecated)', function () {
    var autoTestDir = path.join(__dirname, './fixtures');

    autotest.scanDir(autoTestDir, function run(dir, helpers, done) {
        var templatePath = path.join(dir, 'template.marko');
        var mainPath = path.join(dir, 'test.js');

        var main = fs.existsSync(mainPath) ? require(mainPath) : {};
        var loadOptions = main && main.loadOptions;

        if (main.checkError) {
            var e;

            try {
                marko.load(templatePath, loadOptions);
            } catch (_e) {
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
            var out = markoRuntimeHtml.createWriter();
            var events = [];
            var eventsByFragmentName = {};

            var addEventListener = function (event) {
                out.on(event, function (arg) {
                    var name = arg.name;

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

            template.render(templateData, out);

            out.on('error', done);

            out.on('finish', function () {
                var html = out.toString();

                if (main.checkHtml) {
                    main.checkHtml(html);
                } else {
                    helpers.compare(html, '.html');
                }

                if (main.checkEvents) {
                    main.checkEvents(events, helpers);
                }

                // Make sure all of the async fragments were correctly ended
                Object.keys(eventsByFragmentName).forEach(function (fragmentName) {
                    var events = eventsByFragmentName[fragmentName];
                    expect(events).to.deep.equal(['asyncFragmentBegin', 'asyncFragmentBeforeRender', 'asyncFragmentFinish']);
                });

                done();
            });

            out.end();
        }
    });
});
