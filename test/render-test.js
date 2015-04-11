'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
// var expect = require('chai').expect;

var testRender = require('./util').createTestRender({
    ext: '.marko'
});

describe('marko/render' , function() {

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
        testRender('fixtures/templates/hello-static', {}, done);
    });

    it('should render a simple template with expressions', function(done) {
        testRender('fixtures/templates/hello-dynamic', {name: 'John'}, done);
    });

    it('should render a template with a custom tag', function(done) {
        testRender('fixtures/templates/custom-tag', {}, done);
    });

    it("should allow for text replacement", function(done) {
        testRender("fixtures/templates/text-replacement", {
            zero: 0,
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
        testRender("fixtures/templates/simple", {
            message: "Hello World!",
            rootClass: "title",
            colors: ["red", "green", "blue"]
        }, done);
    });

    it("should allow for simple template handlers", function(done) {
        testRender("fixtures/templates/simple-handlers", {dynamic: "universe"}, done);
    });

    it("should allow for template handlers with nested body content", function(done) {
        testRender("fixtures/templates/nested-handlers", {showConditionalTab: false}, done);
    });

    it("should allow entity expressions", function(done) {
        testRender("fixtures/templates/entities", {}, done);
    });

    it("should allow escaped expressions", function(done) {
        testRender("fixtures/templates/escaped", {}, done);
    });

    it("should allow complex expressions", function(done) {
        testRender("fixtures/templates/expressions", {}, done);
    });

    it("should allow whitespace to be removed", function(done) {
        testRender("fixtures/templates/whitespace", {}, done);
    });

    it("should handle whitespace when using expressions", function(done) {
        testRender("fixtures/templates/whitespace2", {}, done);
    });

    it("should handle whitespace when using expressions", function(done) {
        testRender("fixtures/templates/whitespace2", {}, done);
    });

    it("should normalize whitespace", function(done) {
        testRender("fixtures/templates/whitespace3", {}, done);
    });

    it("should preserve whitespace using <compiler-options>", function(done) {
        testRender("fixtures/templates/whitespace4", {}, done);
    });

    it("should handle whitespace correctly for mixed text and element children", function(done) {
        testRender("fixtures/templates/whitespace-inline-elements", {}, done);
    });

    it("should allow HTML output that is not well-formed XML", function(done) {
        testRender("fixtures/templates/html", {}, done);
    });

    it("should allow for looping", function(done) {
        testRender("fixtures/templates/looping", {}, done);
    });

    it("should allow for looping (native for-loop)", function(done) {
        testRender("fixtures/templates/looping-native-for-loop", {}, done);
    });

    it("should allow for looping over properties", function(done) {
        testRender("fixtures/templates/looping-props", {}, done);
    });

    it("should allow for looping over ranges", function(done) {
        testRender("fixtures/templates/looping-range", {}, done);
    });

    it("should allow for dynamic attributes", function(done) {
        testRender("fixtures/templates/attrs", {"myAttrs": {style: "background-color: #FF0000; <test>", "class": "my-div"}}, done);
    });

    it("should allow for <def> functions", function(done) {
        testRender("fixtures/templates/def", {}, done);
    });

    it("should allow for <with> functions", function(done) {
        testRender("fixtures/templates/with", {}, done);
    });

    it("should allow for scriptlets", function(done) {
        testRender("fixtures/templates/scriptlet", {}, done);
    });


    it("should allow for includes", function(done) {
        testRender("fixtures/templates/include", {}, done);
    });

    it("should allow for <invoke function... />", function(done) {
        testRender("fixtures/templates/invoke", {}, done);
    });

    it("should allow for require", function(done) {
        testRender("fixtures/templates/require", {}, done);
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

    //     tryTemplate("fixtures/templates/errors", function(message, errors) {
    //         var len = errors ? errors.length : -1;
    //         expect(len).toEqual(25);


    //     });


    // });

    it("should allow static file includes", function(done) {
        testRender("fixtures/templates/include-resource-static", {}, done);
    });

    it("should allow HTML pages with inline script", function(done) {
        testRender("fixtures/templates/inline-script", {name: "World"}, done);
    });

    it("should allow CDATA inside templates", function(done) {
        testRender("fixtures/templates/cdata", {name: "World"}, done);
    });

    // it("should allow type conversion", function(done) {
    //     var TypeConverter = require('raptor/templating/compiler/TypeConverter');
    //     expect(TypeConverter.convert('${entity:special}', "string", true).toString()).toEqual('"&special;"');
    // });

    it("should allow for if...else", function(done) {
        testRender("fixtures/templates/if-else", {}, done);
    });

    it("should allow for expressions and variables inside JavaScript strings", function(done) {
        testRender("fixtures/templates/string-expressions", {name: "John", count: 10}, done);
    });

    it("should allow for simple conditionals", function(done) {
        testRender("fixtures/templates/simple-conditionals", {name: "John", count: 51}, done);
    });

    it("should allow for conditional attributes", function(done) {
        testRender("fixtures/templates/conditional-attributes", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer using a custom property name", function(done) {
        testRender("fixtures/templates/dynamic-attributes", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer", function(done) {
        testRender("fixtures/templates/dynamic-attributes2", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer as part of input object", function(done) {
        testRender("fixtures/templates/dynamic-attributes3", {}, done);
    });

    it("should allow for nested attributes", function(done) {
        testRender("fixtures/templates/nested-attrs", {active: true}, done);
    });

    it("should allow for new variables to be created and assigned values", function(done) {
        testRender("fixtures/templates/var", {active: true}, done);
    });


    it("should handle XML escaping correctly", function(done) {
        testRender("fixtures/templates/xml-escaping", {name: "<Patrick>", welcome: '<span>Welcome</span>'}, done);
    });

    it("should allow for a doctype tag and a doctype attribute", function(done) {
        testRender("fixtures/templates/doctype", {}, done);
    });

    it("should allow for using templates to render custom tags", function(done) {
        testRender("fixtures/templates/template-as-tag", {title: "My Page Title"}, done);
    });

    it("should allow for caching HTML fragments", function(done) {
        testRender("fixtures/templates/caching", {}, done);
    });

    it("should escape XML in text node when enabled", function(done) {
        testRender("fixtures/templates/escape-xml-enabled", {}, done);
    });

    it("should not escape XML in text node when disabled", function(done) {
        testRender("fixtures/templates/escape-xml-disabled", {}, done);
    });

    it("should allow for attributes with default values", function(done) {
        testRender("fixtures/templates/default-attributes", {}, done);
    });

    it("should allow for input expressions to be provided to tag handler nodes", function(done) {
        testRender("fixtures/templates/tag-input-expressions", {name: "Frank", adult: true}, done);
    });

    it("should allow for using layouts", function(done) {
        testRender("fixtures/templates/layout-use", {}, done);
    });

    it("should work with custom iteration", function(done) {
        testRender("fixtures/templates/looping-iterator", {
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
        testRender("fixtures/templates/scanned-tags", {}, done);
    });

    it("should support scanning a directory for tags", function(done) {
        testRender("fixtures/templates/template-tag-dynamic-attributes", {}, done);
    });

    it("should not escape HTML characters inside script tags", function(done) {
        testRender("fixtures/templates/script-tag-entities", {
            name: '<script>evil<script>'
        }, done);
    });

    it("should not interfer with a 'for' attribute assigned to a label element", function(done) {
        testRender("fixtures/templates/label-for", {
            name: '<label for="hello">Hello</label>'
        }, done);
    });

    it("should handle 'body-only-if' correctly", function(done) {
        testRender("fixtures/templates/body-only-if", {
            url: '/foo'
        }, done);
    });

    it("should support boolean attributes", function(done) {
        testRender("fixtures/templates/boolean-attributes", {
            options: [
                {  value: 'red', selected: false },
                {  value: 'green', selected: true },
                {  value: 'blue', selected: false }
            ],
            disabled: false,
            checked: true
        }, done);
    });

    it("should support importing taglibs into other taglibs", function(done) {
        testRender("fixtures/templates/taglib-imports", {}, done);
    });

    it("should support c-input being used in conjunction with attributes", function(done) {
        testRender("fixtures/templates/c-input-plus-attrs", {}, done);
    });
});
