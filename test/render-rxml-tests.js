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

    var raptorTemplates = require('../');
    var Context = raptorTemplates.Context;
    var context = options.context || new Context(new StringBuilder());

    raptorTemplates.render(inputPath, data, context)
        .on('end', function() {
            var output = context.getOutput();

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

describe('raptor-templates/rxml' , function() {

    beforeEach(function(done) {
        // for (var k in require.cache) {
        //     if (require.cache.hasOwnProperty(k)) {
        //         delete require.cache[k];
        //     }
        // }

        // require('raptor-logging').configureLoggers({
        //     'raptor-templates': 'INFO'
        // });

        done();
    });


    it("should allow for text replacement", function(done) {
        testRender("test-project/rxml-templates/text-replacement.rxml", {
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
        testRender("test-project/rxml-templates/simple.rxml", {
            message: "Hello World!",
            rootClass: "title",
            colors: ["red", "green", "blue"]
        }, done);
    });
    
    it("should allow for simple template handlers", function(done) {
        testRender("test-project/rxml-templates/simple-handlers.rxml", {dynamic: "universe"}, done);
    });
    
    it("should allow for template handlers with nested body content", function(done) {
        testRender("test-project/rxml-templates/nested-handlers.rxml", {showConditionalTab: false}, done);
    });

    it("should allow entity expressions", function(done) {
        testRender("test-project/rxml-templates/entities.rxml", {}, done);
    });
    
    it("should allow escaped expressions", function(done) {
        testRender("test-project/rxml-templates/escaped.rxml", {}, done);
    });
    
    it("should allow complex expressions", function(done) {
        testRender("test-project/rxml-templates/expressions.rxml", {}, done);
    });
    
    it("should allow whitespace to be removed", function(done) {
        testRender("test-project/rxml-templates/whitespace.rxml", {}, done);
    });
    
    it("should handle whitespace when using expressions", function(done) {
        testRender("test-project/rxml-templates/whitespace2.rxml", {}, done);
    });
    
    it("should handle whitespace when using expressions", function(done) {
        testRender("test-project/rxml-templates/whitespace2.rxml", {}, done);
    });
    
    it("should normalize whitespace", function(done) {
        testRender("test-project/rxml-templates/whitespace3.rxml", {}, done);
    });
    
    it("should handle whitespace correctly for mixed text and element children", function(done) {
        testRender("test-project/rxml-templates/whitespace-inline-elements.rxml", {}, done);
    });
    
    it("should allow HTML output that is not well-formed XML", function(done) {
        testRender("test-project/rxml-templates/html.rxml", {}, done);
    });
    
    it("should allow for looping", function(done) {
        testRender("test-project/rxml-templates/looping.rxml", {}, done);
    });

    it("should allow for looping over properties", function(done) {
        testRender("test-project/rxml-templates/looping-props.rxml", {}, done);
    });
    
    it("should allow for dynamic attributes", function(done) {
        testRender("test-project/rxml-templates/attrs.rxml", {"myAttrs": {style: "background-color: #FF0000; <test>", "class": "my-div"}}, done);
    });
    
    it("should allow for choose...when statements", function(done) {
        testRender("test-project/rxml-templates/choose-when.rxml", {}, done);
    });
    
    it("should not allow <c-otherwise> to be before a <c-when> tag", function(done) {
        
        var e;

        function fakeDone() {
            done('Error expected');
        }

        try {
            testRender("test-project/rxml-templates/choose-when-invalid-otherwise-not-last.rxml", {}, fakeDone);
        }
        catch(_e) {
            e = _e;
        }
        
        expect(e != null).to.equal(true);
        done();
    });
    
    it("should allow for <c-def> functions", function(done) {
        testRender("test-project/rxml-templates/def.rxml", {}, done);
    });
    
    it("should allow for <c-with> functions", function(done) {
        testRender("test-project/rxml-templates/with.rxml", {}, done);
    });
    
    it("should allow for scriptlets", function(done) {
        testRender("test-project/rxml-templates/scriptlet.rxml", {}, done);
    });
    
    it("should allow for when and otherwise as attributes", function(done) {
        testRender("test-project/rxml-templates/choose-when-attributes.rxml", {}, done);
    });
    
    it("should allow for elements to be stripped out at compile time", function(done) {
        testRender("test-project/rxml-templates/strip.rxml", {}, done);
    });
    
    it("should allow for body content to be replaced with the result of an expression", function(done) {
        testRender("test-project/rxml-templates/content.rxml", {}, done);
    });
    
    it("should allow for an element to be replaced with the result of an expression", function(done) {
        testRender("test-project/rxml-templates/replace.rxml", {message: "Hello World!"}, done);
    });
    
    it("should allow for includes", function(done) {
        testRender("test-project/rxml-templates/include.rxml", {}, done);
    });
    
    it("should allow for <c-invoke function... />", function(done) {
        testRender("test-project/rxml-templates/invoke.rxml", {}, done);
    });
    
    it("should allow for require", function(done) {
        testRender("test-project/rxml-templates/require.rxml", {}, done);
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
        
    //     tryTemplate("test-project/rxml-templates/errors.rxml", function(message, errors) {
    //         var len = errors ? errors.length : -1;
    //         expect(len).toEqual(25);
            
            
    //     });
        
        
    // });
    
    it("should allow static file includes", function(done) {
        testRender("test-project/rxml-templates/include-resource-static.rxml", {}, done);
    });
    
    it("should allow HTML pages with inline script", function(done) {
        testRender("test-project/rxml-templates/inline-script.rxml", {name: "World"}, done);
    });
    
    it("should allow CDATA inside templates", function(done) {
        testRender("test-project/rxml-templates/cdata.rxml", {name: "World"}, done);
    });
    
    // it("should allow type conversion", function(done) {
    //     var TypeConverter = require('raptor/templating/compiler/TypeConverter');
    //     expect(TypeConverter.convert('${entity:special}', "string", true).toString()).toEqual('"&special;"');
    // });
    
    it("should allow for if...else", function(done) {
        testRender("test-project/rxml-templates/if-else.rxml", {}, done);
    });
    
    it("should allow for expressions and variables inside JavaScript strings", function(done) {
        testRender("test-project/rxml-templates/string-expressions.rxml", {name: "John", count: 10}, done);
    });
    
    it("should allow for simple conditionals", function(done) {
        testRender("test-project/rxml-templates/simple-conditionals.rxml", {name: "John", count: 51}, done);
    });
    
    it("should allow for conditional attributes", function(done) {
        testRender("test-project/rxml-templates/conditional-attributes.rxml", {}, done);
    });
    
    it("should allow for dynamic attributes to be passed to tag renderer using a custom property name", function(done) {
        testRender("test-project/rxml-templates/dynamic-attributes.rxml", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer", function(done) {
        testRender("test-project/rxml-templates/dynamic-attributes2.rxml", {}, done);
    });

    it("should allow for dynamic attributes to be passed to tag renderer as part of input object", function(done) {
        testRender("test-project/rxml-templates/dynamic-attributes3.rxml", {}, done);
    });
    
    // it("should allow for nodes to be converted to expressions", function(done) {
    //     var ElementNode = require('raptor/templating/compiler/ElementNode');
    //     var TextNode = require('raptor/templating/compiler/TextNode');
    //     var TemplateBuilder = require('raptor/templating/compiler/TemplateBuilder');

    //     var compiler = require('raptor/templating/compiler').createCompiler();
    //     var template = new TemplateBuilder(compiler);
        
    //     var div = new ElementNode("div");
    //     var text = new TextNode("Hello World!");
    //     div.appendChild(text);
        
    //     var expression = div.getExpression(template).toString();
    //     var bodyContentExpression = div.getBodyContentExpression(template).toString();
        
    //     var sb = require('raptor/strings').createStringBuilder();
    //     var context = require('raptor/templating').createContext(sb);
    //     var output = eval(expression);
    //     expect(output.toString()).toEqual('<div>Hello World!</div>');
        
    //     output = eval(bodyContentExpression);
    //     expect(output.toString()).toEqual('Hello World!');
        
    // });
    
    it("should allow for nested attributes", function(done) {
        testRender("test-project/rxml-templates/nested-attrs.rxml", {active: true}, done);
    });
    
    it("should allow for new variables to be created and assigned values", function(done) {
        testRender("test-project/rxml-templates/var.rxml", {active: true}, done);
    });
    
    
    it("should handle XML escaping correctly", function(done) {
        testRender("test-project/rxml-templates/xml-escaping.rxml", {name: "<Patrick>", welcome: '<span>Welcome</span>'}, done);
    });
    
    it("should allow for a doctype tag and a doctype attribute", function(done) {
        testRender("test-project/rxml-templates/doctype.rxml", {}, done);
    });

    it("should allow for using templates to render custom tags", function(done) {
        testRender("test-project/rxml-templates/template-as-tag.rxml", {title: "My Page Title"}, done);
    });

    it("should allow for caching HTML fragments", function(done) {
        testRender("test-project/rxml-templates/caching.rxml", {}, done);
    });
    
    it("should escape XML in text node when enabled", function(done) {
        testRender("test-project/rxml-templates/escape-xml-enabled.rxml", {}, done);
    });

    it("should not escape XML in text node when disabled", function(done) {
        testRender("test-project/rxml-templates/escape-xml-disabled.rxml", {}, done);
    });

    it("should allow for attributes with default values", function(done) {
        testRender("test-project/rxml-templates/default-attributes.rxml", {}, done);
    });

    it("should allow for input expressions to be provided to tag handler nodes", function(done) {
        testRender("test-project/rxml-templates/tag-input-expressions.rxml", {name: "Frank", adult: true}, done);
    });

    it("should allow for using layouts", function(done) {
        testRender("test-project/rxml-templates/layout-use.rxml", {}, done);
    });

    it("should add parentheses around each expression when using string concatenation to handle ternary operator", function(done) {
        testRender("test-project/rxml-templates/string-concat-with-ternary-operator.rxml", {}, done);
    });

});

