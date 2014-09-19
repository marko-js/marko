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

    // var compiler = require('../compiler').createCompiler(inputPath);
    // var src = fs.readFileSync(inputPath, {encoding: 'utf8'});

    // var compiledSrc = compiler.compile(src);
    // fs.writeFileSync(compiledPath, compiledSrc, {encoding: 'utf8'});


    // console.log('\nCompiled (' + inputPath + '):\n---------\n' + compiledSrc);



    var marko = require('../');

    require('../compiler').defaultOptions.checkUpToDate = false;

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

describe('marko/marko' , function() {

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

    it('should render a simple template', function(done) {
        testRender('test-project/simple.marko', {}, done);
    });

    it('should render a simple template with expressions', function(done) {
        testRender('test-project/hello-dynamic.marko', {name: 'John'}, done);
    });

    it('should render a template with a custom tag', function(done) {
        testRender('test-project/custom-tag.marko', {}, done);
    });

    it("should allow for text replacement", function(done) {
        testRender("test-project/html-templates/text-replacement.marko", {
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
        testRender("test-project/html-templates/simple.marko", {
            message: "Hello World!",
            rootClass: "title",
            colors: ["red", "green", "blue"]
        }, done);
    });

    it("should allow for simple template handlers", function(done) {
        testRender("test-project/html-templates/simple-handlers.marko", {dynamic: "universe"}, done);
    });

    it("should allow for template handlers with nested body content", function(done) {
        testRender("test-project/html-templates/nested-handlers.marko", {showConditionalTab: false}, done);
    });

    it("should allow entity expressions", function(done) {
        testRender("test-project/html-templates/entities.marko", {}, done);
    });

    it("should allow escaped expressions", function(done) {
        testRender("test-project/html-templates/escaped.marko", {}, done);
    });

    it("should allow complex expressions", function(done) {
        testRender("test-project/html-templates/expressions.marko", {}, done);
    });

    it("should allow whitespace to be removed", function(done) {
        testRender("test-project/html-templates/whitespace.marko", {}, done);
    });

    it("should handle whitespace when using expressions", function(done) {
        testRender("test-project/html-templates/whitespace2.marko", {}, done);
    });

    it("should handle whitespace when using expressions", function(done) {
        testRender("test-project/html-templates/whitespace2.marko", {}, done);
    });

    it("should normalize whitespace", function(done) {
        testRender("test-project/html-templates/whitespace3.marko", {}, done);
    });

    it("should handle whitespace correctly for mixed text and element children", function(done) {
        testRender("test-project/html-templates/whitespace-inline-elements.marko", {}, done);
    });

    it("should allow HTML output that is not well-formed XML", function(done) {
        testRender("test-project/html-templates/html.marko", {}, done);
    });

    it("should allow for looping", function(done) {
        testRender("test-project/html-templates/looping.marko", {}, done);
    });

    it("should allow for looping over properties", function(done) {
        testRender("test-project/html-templates/looping-props.marko", {}, done);
    });

    it("should allow for looping over ranges", function(done) {
        testRender("test-project/html-templates/looping-range.marko", {}, done);
    });

    it("should allow for dynamic attributes", function(done) {
        testRender("test-project/html-templates/attrs.marko", {"myAttrs": {style: "background-color: #FF0000; <test>", "class": "my-div"}}, done);
    });

    it("should allow for <def> functions", function(done) {
        testRender("test-project/html-templates/def.marko", {}, done);
    });

    it("should allow for <with> functions", function(done) {
        testRender("test-project/html-templates/with.marko", {}, done);
    });

    it("should allow for scriptlets", function(done) {
        testRender("test-project/html-templates/scriptlet.marko", {}, done);
    });


    it("should allow for includes", function(done) {
        testRender("test-project/html-templates/include.marko", {}, done);
    });

    it("should allow for <invoke function... />", function(done) {
        testRender("test-project/html-templates/invoke.marko", {}, done);
    });

    it("should allow for require", function(done) {
        testRender("test-project/html-templates/require.marko", {}, done);
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

    //     tryTemplate("test-project/html-templates/errors.marko", function(message, errors) {
    //         var len = errors ? errors.length : -1;
    //         expect(len).toEqual(25);


    //     });


    // });

    it("should allow static file includes", function(done) {
        testRender("test-project/html-templates/include-resource-static.marko", {}, done);
    });

    it("should allow HTML pages with inline script", function(done) {
        testRender("test-project/html-templates/inline-script.marko", {name: "World"}, done);
    });

    it("should allow CDATA inside templates", function(done) {
        testRender("test-project/html-templates/cdata.marko", {name: "World"}, done);
    });

    // it("should allow type conversion", function(done) {
    //     var TypeConverter = require('raptor/templating/compiler/TypeConverter');
    //     expect(TypeConverter.convert('${entity:special}', "string", true).toString()).toEqual('"&special;"');
    // });

    it("should allow for if...else", function(done) {
        testRender("test-project/html-templates/if-else.marko", {}, done);
    });

    it("should allow for expressions and variables inside JavaScript strings", function(done) {
        testRender("test-project/html-templates/string-expressions.marko", {name: "John", count: 10}, done);
    });

    it("should allow for simple conditionals", function(done) {
        testRender("test-project/html-templates/simple-conditionals.marko", {name: "John", count: 51}, done);
    });

    it("should allow for conditional attributes", function(done) {
        testRender("test-project/html-templates/conditional-attributes.marko", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer using a custom property name", function(done) {
        testRender("test-project/html-templates/dynamic-attributes.marko", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer", function(done) {
        testRender("test-project/html-templates/dynamic-attributes2.marko", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer as part of input object", function(done) {
        testRender("test-project/html-templates/dynamic-attributes3.marko", {}, done);
    });

    it("should allow for nested attributes", function(done) {
        testRender("test-project/html-templates/nested-attrs.marko", {active: true}, done);
    });

    it("should allow for new variables to be created and assigned values", function(done) {
        testRender("test-project/html-templates/var.marko", {active: true}, done);
    });


    it("should handle XML escaping correctly", function(done) {
        testRender("test-project/html-templates/xml-escaping.marko", {name: "<Patrick>", welcome: '<span>Welcome</span>'}, done);
    });

    it("should allow for a doctype tag and a doctype attribute", function(done) {
        testRender("test-project/html-templates/doctype.marko", {}, done);
    });

    it("should allow for using templates to render custom tags", function(done) {
        testRender("test-project/html-templates/template-as-tag.marko", {title: "My Page Title"}, done);
    });

    it("should allow for caching HTML fragments", function(done) {
        testRender("test-project/html-templates/caching.marko", {}, done);
    });

    it("should escape XML in text node when enabled", function(done) {
        testRender("test-project/html-templates/escape-xml-enabled.marko", {}, done);
    });

    it("should not escape XML in text node when disabled", function(done) {
        testRender("test-project/html-templates/escape-xml-disabled.marko", {}, done);
    });

    it("should allow for attributes with default values", function(done) {
        testRender("test-project/html-templates/default-attributes.marko", {}, done);
    });

    it("should allow for input expressions to be provided to tag handler nodes", function(done) {
        testRender("test-project/html-templates/tag-input-expressions.marko", {name: "Frank", adult: true}, done);
    });

    it("should allow for using layouts", function(done) {
        testRender("test-project/html-templates/layout-use.marko", {}, done);
    });

    it("should work with custom iteration", function(done) {
        testRender("test-project/html-templates/looping-iterator.marko", {
            reverseIterator: function(arrayList, callback){
                var statusVar = {first: 0, last: arrayList.length-1};
                for(var i=arrayList.length-1; i>=0; i--){
                    statusVar.index = i;
                    callback(arrayList[i], statusVar);
                }
            }
        }, done);
    });

    it("should support scanning a directory for tags", function(done) {
        testRender("test-project/html-templates/scanned-tags.marko", {}, done);
    });

    it("should support scanning a directory for tags", function(done) {
        testRender("test-project/html-templates/template-tag-dynamic-attributes.marko", {}, done);
    });

    it("should not escape HTML characters inside script tags", function(done) {
        testRender("test-project/html-templates/script-tag-entities.marko", {
            name: '<script>evil<script>'
        }, done);
    });



});
