/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(
    "raptor/templating/compiler", 
    function(require, exports, module) {
        "use strict";
        
        var TaglibCollection = require('raptor/templating/compiler/TaglibCollection'),
            taglibs = new TaglibCollection(),
            extend = require('raptor').extend,
            ExpressionParser = require('raptor/templating/compiler/ExpressionParser'),
            defaultOptions = {
                minify: false,
                preserveWhitespace: {
                    'pre': true,
                    'textarea': true
                },
                allowSelfClosing: { //Conditionally enable self-closing tags for specific elements. Self-closing tag: <div /> Not self-closing tag: <div></div>
                    //'pre': true
                },
                startTagOnly: {
                    'img': true,
                    'br': true,
                    'input': true,
                    'meta': true,
                    'link': true,
                    'hr': true
                }
            };
        
        
        
        return {

            /**
             * Creates a new object that can be used to compile templates with the
             * provided options.
             * 
             * <p>
             * Allowed options:
             * <ul>
             *  <li>
             *      <b>preserveWhitespace</b> (object|boolean): An object that defines which elements should
             *          have their whitespace preserved. While most whitespace gets normalized
             *          in HTML documents, some HTML elements make use of their whitespace (e.g. PRE and TEXTAREA tags).
             *          If this option is set to "true" then all whitespace is preserved.
             *          
             *          <p>
             *          Default value:
<pre>
{
    'pre': true,
    'textarea': true
}
</pre>
             *  </li>
             *  <li>
             *      <b>allowSelfClosing</b> (object): An object that defines which elements are allowed
             *          to be self-closing. By default, all elements are allowed to be self-closing.
             *          Some browsers do not handle certain HTML elements that are self-closing
             *          and require a separate ending tag.
             *          
             *          <p>
             *          Default value:
<pre>
allowSelfClosing: {
    'script': false,
    'div': false
}
</pre>
             *  </li>
             *  <li>
             *      <b>startTagOnly</b> (object): An object that defines which elements should only be
             *          written out with the opening tag and not the closing tags. For HTML5
             *          output that is not well-formed XML it is acceptable to write
             *          certain elements with the opening tag only.
             *          
             *          <p>
             *          Default value:
<pre>
startTagOnly: {
    'img': true,
    'br': true
}
</pre>
             *  </li>
             * </ul>
             * 
             * @param options Compiler options (see above)
             * @returns {raptor/templating/compiler$TemplateCompiler} The newly created compiler
             */
            createCompiler: function(options) {
                if (this.discoverTaglibs) { //Only discover taglibs if that method is implemented
                    this.discoverTaglibs(); //The discoverTaglibs method is implemented on the server so execute it now
                }
                
                var TemplateCompiler = require("raptor/templating/compiler/TemplateCompiler"); //Get a reference to the TemplateCompiler class 
                if (options) {
                    /*
                     * If options were provided then they should override the default options.
                     * NOTE: Only top-level properties are overridden
                     */
                    options = extend(
                            extend({}, defaultOptions), //Create a clone of the default options that can be extended 
                            options);
                }
                else {
                    options = defaultOptions; //Otherwise, no options were provided so use the default options
                }

                return new TemplateCompiler(taglibs, options);
            },
            
            /**
             * Compiles an XML template by creating a new compiler using the provided options and
             * then passing along the XML source code for the template to be compiled. 
             * 
             * For a list of options see {@link raptor/templating/compiler/createCompiler}
             * 
             * @param xmlSource {String} The XML source code for the template to compile
             * @param path {String} The path to the template (for debugging/error reporting purposes only)
             * @returns {String} The JavaScript code for the compiled template.
             */
            compile: function(xmlSource, path, options) {
                return this.createCompiler(options).compile(xmlSource, path);
            },
            
            /**
             * 
             * @param xmlSource {String} The XML source code for the template to compile
             * @param path {String} The path to the template (for debugging/error reporting purposes only)
             * @returns {void}
             */
            compileAndLoad: function(xmlSource, path, options) {
                this.createCompiler(options).compileAndLoad(xmlSource, path);
            },
            

            /**
             * 
             * @param taglibXml
             * @param path
             * @returns
             */
            loadTaglibXml: function(taglibXml, path) {
                var TaglibXmlLoader = require("raptor/templating/compiler/TaglibXmlLoader");
                var taglib = TaglibXmlLoader.load(taglibXml, path);
                this.addTaglib(taglib);
                return taglib;
            },
            
            /**
             * Adds a {@link raptor/templating/compiler/Taglib} instance to the internal {@link raptor/templating/compiler/TaglibCollection} so
             * that the taglib is available to all compilers.
             * 
             * @param taglib {raptor/templating/compiler/Taglib} The taglib to add
             * @returns {void}
             */
            addTaglib: function(taglib) {
                taglibs.add(taglib); 
            },

            addTaglibAlias: function(uri, alias) {
                taglibs.addAlias(uri, alias); 
            },
            
            clearTaglibs: function() {
                this.taglibs = taglibs = new TaglibCollection();
            },
            
            hasTaglib: function(uri) {
                return taglibs.isTaglib(uri);
            },
            
            /**
             * 
             * Registers a custom expression handler with the given name and handler function.
             * 
             * <p>
             * Custom expression handlers are functions that can be used to control the compiled output
             * of certain expressions. Custom expression handlers are of the following form:
             * ${<handler-name>:<custom-expression>}
             * 
             * <p>
             * When a custom expression handler is used in a template then the provided handler
             * function will be invoked with two arguments:
             * <ul>
             *  <li><b>customExpression</b> (String) The custom expression provided in the template the (the part after the colon)</li>
             *  <li><b>helper</b> (ExpressionParserHelper) The helper that can be used to control the compiled output</li>
             * </ul>
             * 
             * @param name
             * @param func
             * @returns
             */
            registerCustomExpressionHandler: function(name, func) {
                ExpressionParser.custom[name] = func;
            },

            recordLoadedTaglib: function(taglibResource) {
                // No-op by default
            },
            
            defaultOptions: defaultOptions,
            
            taglibs: taglibs
        };
    });