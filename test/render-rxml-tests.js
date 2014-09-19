'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');
var fs = require('fs');

var StringBuilder = require('raptor-strings/StringBuilder');

function testRender(path, data, done, options) {
    var inputPath = nodePath.join(__dirname, path);
    var expectedPath = nodePath.join(__dirname, path + '.expected.html');
    var actualPath = nodePath.join(__dirname, path + '.actual.html');
    options = options || {};
    var compiledPath = nodePath.join(__dirname, path + '.actual.js');

    var compiler = require('../compiler').createCompiler(inputPath);
    var src = fs.readFileSync(inputPath, {encoding: 'utf8'});

    var compiledSrc = compiler.compile(src);
    fs.writeFileSync(compiledPath, compiledSrc, {encoding: 'utf8'});


    // console.log('\nCompiled (' + inputPath + '):\n---------\n' + compiledSrc);

    require('../compiler').defaultOptions.checkUpToDate = false;

    var marko = require('../');
    var AsyncWriter = marko.AsyncWriter;
    var out = options.out || new AsyncWriter(new StringBuilder());

    marko.render(inputPath, data, out)
        .on('end', function() {
            var output = out.getOutput();

            fs.writeFileSync(actualPath, output, {encoding: 'utf8'});

            var expected;
            try {
                expected = options.expected || fs.readFileSync(expectedPath, {encoding: 'utf8'});
            }
            catch(e) {
                expected = 'TBD';
                fs.writeFileSync(expectedPath, expected, {encoding: 'utf8'});
            }

            if (output !== expected) {
                throw new Error('Unexpected output for "' + inputPath + '":\nEXPECTED (' + expectedPath + '):\n---------\n' + expected +
                    '\n---------\nACTUAL (' + actualPath + '):\n---------\n' + output + '\n---------');
            }

            done();
        })
        .on('error', done)
        .end();
}

describe('marko/xml' , function() {

    beforeEach(function(done) {
        // for (var k in require.cache) {
        //     if (require.cache.hasOwnProperty(k)) {
        //         delete require.cache[k];
        //     }
        // }

        // require('raptor-logging').configureLoggers({
        //     'marko': 'INFO'
        // });

        done();
    });


    it("should allow for text replacement", function(done) {
        testRender("test-project/xml-templates/text-replacement.marko.xml", {
            person: {
                name: "John",
                address: {
                    city: "San Jose",
                    state: "CA",
                    line1: "2065 E. Hamilton Ave.",
                    zip: "95125"
                }
            }
        }, done);
    });

    it("should render simple template with logic", function(done) {
        testRender("test-project/xml-templates/simple.marko.xml", {
            message: "Hello World!",
            rootClass: "title",
            colors: ["red", "green", "blue"]
        }, done);
    });

    it("should allow for simple template handlers", function(done) {
        testRender("test-project/xml-templates/simple-handlers.marko.xml", {dynamic: "universe"}, done);
    });

    it("should allow for template handlers with nested body content", function(done) {
        testRender("test-project/xml-templates/nested-handlers.marko.xml", {showConditionalTab: false}, done);
    });

    it("should allow entity expressions", function(done) {
        testRender("test-project/xml-templates/entities.marko.xml", {}, done);
    });

    it("should allow escaped expressions", function(done) {
        testRender("test-project/xml-templates/escaped.marko.xml", {}, done);
    });

    it("should allow complex expressions", function(done) {
        testRender("test-project/xml-templates/expressions.marko.xml", {}, done);
    });

    it("should allow whitespace to be removed", function(done) {
        testRender("test-project/xml-templates/whitespace.marko.xml", {}, done);
    });

    it("should handle whitespace when using expressions", function(done) {
        testRender("test-project/xml-templates/whitespace2.marko.xml", {}, done);
    });

    it("should handle whitespace when using expressions", function(done) {
        testRender("test-project/xml-templates/whitespace2.marko.xml", {}, done);
    });

    it("should normalize whitespace", function(done) {
        testRender("test-project/xml-templates/whitespace3.marko.xml", {}, done);
    });

    it("should handle whitespace correctly for mixed text and element children", function(done) {
        testRender("test-project/xml-templates/whitespace-inline-elements.marko.xml", {}, done);
    });

    it("should allow HTML output that is not well-formed XML", function(done) {
        testRender("test-project/xml-templates/html.marko.xml", {}, done);
    });

    it("should allow for looping", function(done) {
        testRender("test-project/xml-templates/looping.marko.xml", {}, done);
    });

    it("should allow for looping over properties", function(done) {
        testRender("test-project/xml-templates/looping-props.marko.xml", {}, done);
    });

    it("should allow for dynamic attributes", function(done) {
        testRender("test-project/xml-templates/attrs.marko.xml", {"myAttrs": {style: "background-color: #FF0000; <test>", "class": "my-div"}}, done);
    });

    it("should allow for <def> functions", function(done) {
        testRender("test-project/xml-templates/def.marko.xml", {}, done);
    });

    it("should allow for <with> functions", function(done) {
        testRender("test-project/xml-templates/with.marko.xml", {}, done);
    });

    it("should allow for scriptlets", function(done) {
        testRender("test-project/xml-templates/scriptlet.marko.xml", {}, done);
    });

    it("should allow for includes", function(done) {
        testRender("test-project/xml-templates/include.marko.xml", {}, done);
    });

    it("should allow for <invoke function... />", function(done) {
        testRender("test-project/xml-templates/invoke.marko.xml", {}, done);
    });

    it("should allow for require", function(done) {
        testRender("test-project/xml-templates/require.marko.xml", {}, done);
    });


    // it("should handle errors correctly", function(done) {



    //     var tryTemplate = function(path, callback) {
    //         try
    //         {
    //             compileAndRender(path, {}, null, true /* invalid */);
    //             callback("", []);
    //         }
    //         catch(e) {

    //             if (!e.errors) {
    //                 logger.error('Error message for template at path "' + path + '": ' + e, e);
    //             }
    //             else {
    //                 console.log('Error message for template at path "' + path + '": ' + e)
    //             }
    //             callback(e.toString(), e.errors);
    //         }
    //     };

    //     tryTemplate("test-project/xml-templates/errors.marko.xml", function(message, errors) {
    //         var len = errors ? errors.length : -1;
    //         expect(len).toEqual(25);


    //     });


    // });

    it("should allow static file includes", function(done) {
        testRender("test-project/xml-templates/include-resource-static.marko.xml", {}, done);
    });

    it("should allow HTML pages with inline script", function(done) {
        testRender("test-project/xml-templates/inline-script.marko.xml", {name: "World"}, done);
    });

    it("should allow CDATA inside templates", function(done) {
        testRender("test-project/xml-templates/cdata.marko.xml", {name: "World"}, done);
    });

    // it("should allow type conversion", function(done) {
    //     var TypeConverter = require('raptor/templating/compiler/TypeConverter');
    //     expect(TypeConverter.convert('${entity:special}', "string", true).toString()).toEqual('"&special;"');
    // });

    it("should allow for if...else", function(done) {
        testRender("test-project/xml-templates/if-else.marko.xml", {}, done);
    });

    it("should allow for expressions and variables inside JavaScript strings", function(done) {
        testRender("test-project/xml-templates/string-expressions.marko.xml", {name: "John", count: 10}, done);
    });

    it("should allow for simple conditionals", function(done) {
        testRender("test-project/xml-templates/simple-conditionals.marko.xml", {name: "John", count: 51}, done);
    });

    it("should allow for conditional attributes", function(done) {
        testRender("test-project/xml-templates/conditional-attributes.marko.xml", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer using a custom property name", function(done) {
        testRender("test-project/xml-templates/dynamic-attributes.marko.xml", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer", function(done) {
        testRender("test-project/xml-templates/dynamic-attributes2.marko.xml", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer as part of input object", function(done) {
        testRender("test-project/xml-templates/dynamic-attributes3.marko.xml", {}, done);
    });

    it("should allow for nested attributes", function(done) {
        testRender("test-project/xml-templates/nested-attrs.marko.xml", {active: true}, done);
    });

    it("should allow for new variables to be created and assigned values", function(done) {
        testRender("test-project/xml-templates/var.marko.xml", {active: true}, done);
    });


    it("should handle XML escaping correctly", function(done) {
        testRender("test-project/xml-templates/xml-escaping.marko.xml", {name: "<Patrick>", welcome: '<span>Welcome</span>'}, done);
    });

    it("should allow for a doctype tag and a doctype attribute", function(done) {
        testRender("test-project/xml-templates/doctype.marko.xml", {}, done);
    });

    it("should allow for using templates to render custom tags", function(done) {
        testRender("test-project/xml-templates/template-as-tag.marko.xml", {title: "My Page Title"}, done);
    });

    it("should allow for caching HTML fragments", function(done) {
        testRender("test-project/xml-templates/caching.marko.xml", {}, done);
    });

    it("should escape XML in text node when enabled", function(done) {
        testRender("test-project/xml-templates/escape-xml-enabled.marko.xml", {}, done);
    });

    it("should not escape XML in text node when disabled", function(done) {
        testRender("test-project/xml-templates/escape-xml-disabled.marko.xml", {}, done);
    });

    it("should allow for attributes with default values", function(done) {
        testRender("test-project/xml-templates/default-attributes.marko.xml", {}, done);
    });

    it("should allow for input expressions to be provided to tag handler nodes", function(done) {
        testRender("test-project/xml-templates/tag-input-expressions.marko.xml", {name: "Frank", adult: true}, done);
    });

    it("should allow for using layouts", function(done) {
        testRender("test-project/xml-templates/layout-use.marko.xml", {}, done);
    });

    it("should add parentheses around each expression when using string concatenation to handle ternary operator", function(done) {
        testRender("test-project/xml-templates/string-concat-with-ternary-operator.marko.xml", {}, done);
    });

});
