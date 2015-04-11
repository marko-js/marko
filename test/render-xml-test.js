'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();

var testRender = require('./util').createTestRender({
    ext: '.marko.xml'
});

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
        testRender("fixtures/xml-templates/text-replacement", {
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
        testRender("fixtures/xml-templates/simple", {
            message: "Hello World!",
            rootClass: "title",
            colors: ["red", "green", "blue"]
        }, done);
    });

    it("should allow for simple template handlers", function(done) {
        testRender("fixtures/xml-templates/simple-handlers", {dynamic: "universe"}, done);
    });

    it("should allow for template handlers with nested body content", function(done) {
        testRender("fixtures/xml-templates/nested-handlers", {showConditionalTab: false}, done);
    });

    it("should allow entity expressions", function(done) {
        testRender("fixtures/xml-templates/entities", {}, done);
    });

    it("should allow escaped expressions", function(done) {
        testRender("fixtures/xml-templates/escaped", {}, done);
    });

    it("should allow complex expressions", function(done) {
        testRender("fixtures/xml-templates/expressions", {}, done);
    });

    it("should allow whitespace to be removed", function(done) {
        testRender("fixtures/xml-templates/whitespace", {}, done);
    });

    it("should handle whitespace when using expressions", function(done) {
        testRender("fixtures/xml-templates/whitespace2", {}, done);
    });

    it("should handle whitespace when using expressions", function(done) {
        testRender("fixtures/xml-templates/whitespace2", {}, done);
    });

    it("should normalize whitespace", function(done) {
        testRender("fixtures/xml-templates/whitespace3", {}, done);
    });

    it("should handle whitespace correctly for mixed text and element children", function(done) {
        testRender("fixtures/xml-templates/whitespace-inline-elements", {}, done);
    });

    it("should allow HTML output that is not well-formed XML", function(done) {
        testRender("fixtures/xml-templates/html", {}, done);
    });

    it("should allow for looping", function(done) {
        testRender("fixtures/xml-templates/looping", {}, done);
    });

    it("should allow for looping over properties", function(done) {
        testRender("fixtures/xml-templates/looping-props", {}, done);
    });

    it("should allow for dynamic attributes", function(done) {
        testRender("fixtures/xml-templates/attrs", {"myAttrs": {style: "background-color: #FF0000; <test>", "class": "my-div"}}, done);
    });

    it("should allow for <def> functions", function(done) {
        testRender("fixtures/xml-templates/def", {}, done);
    });

    it("should allow for <with> functions", function(done) {
        testRender("fixtures/xml-templates/with", {}, done);
    });

    it("should allow for scriptlets", function(done) {
        testRender("fixtures/xml-templates/scriptlet", {}, done);
    });

    it("should allow for includes", function(done) {
        testRender("fixtures/xml-templates/include", {}, done);
    });

    it("should allow for <invoke function... />", function(done) {
        testRender("fixtures/xml-templates/invoke", {}, done);
    });

    it("should allow for require", function(done) {
        testRender("fixtures/xml-templates/require", {}, done);
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

    //     tryTemplate("fixtures/xml-templates/errors", function(message, errors) {
    //         var len = errors ? errors.length : -1;
    //         expect(len).toEqual(25);


    //     });


    // });

    it("should allow static file includes", function(done) {
        testRender("fixtures/xml-templates/include-resource-static", {}, done);
    });

    it("should allow HTML pages with inline script", function(done) {
        testRender("fixtures/xml-templates/inline-script", {name: "World"}, done);
    });

    it("should allow CDATA inside templates", function(done) {
        testRender("fixtures/xml-templates/cdata", {name: "World"}, done);
    });

    // it("should allow type conversion", function(done) {
    //     var TypeConverter = require('raptor/templating/compiler/TypeConverter');
    //     expect(TypeConverter.convert('${entity:special}', "string", true).toString()).toEqual('"&special;"');
    // });

    it("should allow for if...else", function(done) {
        testRender("fixtures/xml-templates/if-else", {}, done);
    });

    it("should allow for expressions and variables inside JavaScript strings", function(done) {
        testRender("fixtures/xml-templates/string-expressions", {name: "John", count: 10}, done);
    });

    it("should allow for simple conditionals", function(done) {
        testRender("fixtures/xml-templates/simple-conditionals", {name: "John", count: 51}, done);
    });

    it("should allow for conditional attributes", function(done) {
        testRender("fixtures/xml-templates/conditional-attributes", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer using a custom property name", function(done) {
        testRender("fixtures/xml-templates/dynamic-attributes", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer", function(done) {
        testRender("fixtures/xml-templates/dynamic-attributes2", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer as part of input object", function(done) {
        testRender("fixtures/xml-templates/dynamic-attributes3", {}, done);
    });

    it("should allow for nested attributes", function(done) {
        testRender("fixtures/xml-templates/nested-attrs", {active: true}, done);
    });

    it("should allow for new variables to be created and assigned values", function(done) {
        testRender("fixtures/xml-templates/var", {active: true}, done);
    });


    it("should handle XML escaping correctly", function(done) {
        testRender("fixtures/xml-templates/xml-escaping", {name: "<Patrick>", welcome: '<span>Welcome</span>'}, done);
    });

    it("should allow for a doctype tag and a doctype attribute", function(done) {
        testRender("fixtures/xml-templates/doctype", {}, done);
    });

    it("should allow for using templates to render custom tags", function(done) {
        testRender("fixtures/xml-templates/template-as-tag", {title: "My Page Title"}, done);
    });

    it("should allow for caching HTML fragments", function(done) {
        testRender("fixtures/xml-templates/caching", {}, done);
    });

    it("should escape XML in text node when enabled", function(done) {
        testRender("fixtures/xml-templates/escape-xml-enabled", {}, done);
    });

    it("should not escape XML in text node when disabled", function(done) {
        testRender("fixtures/xml-templates/escape-xml-disabled", {}, done);
    });

    it("should allow for attributes with default values", function(done) {
        testRender("fixtures/xml-templates/default-attributes", {}, done);
    });

    it("should allow for input expressions to be provided to tag handler nodes", function(done) {
        testRender("fixtures/xml-templates/tag-input-expressions", {name: "Frank", adult: true}, done);
    });

    it("should allow for using layouts", function(done) {
        testRender("fixtures/xml-templates/layout-use", {}, done);
    });

    it("should add parentheses around each expression when using string concatenation to handle ternary operator", function(done) {
        testRender("fixtures/xml-templates/string-concat-with-ternary-operator", {}, done);
    });

});
