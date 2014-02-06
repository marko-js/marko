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
'use strict';

var TextNode = require('./TextNode');
var ElementNode = require('./ElementNode');

function ParseTreeBuilder(taglibs) {
    this.rootNode = null;
    this.prevTextNode = null;
    this.parentNode = null;
    this.taglibs = taglibs;
}

ParseTreeBuilder.prototype = {

    handleCharacters: function(t) {
        if (!this.parentNode) {
            return;    //Some bad XML parsers allow text after the ending element...
        }

        if (this.prevTextNode) {
            this.prevTextNode.text += t;
        } else {
            this.prevTextNode = new TextNode(t);
            this.prevTextNode.pos = this.getPos();
            this.parentNode.appendChild(this.prevTextNode);
        }
    },

    handleStartElement: function(el, attributes) {
        this.prevTextNode = null;

        var taglibs = this.taglibs;
        
        var elNS = taglibs.resolveNamespace(el.namespace) || el.namespace;

        var elementNode = new ElementNode(
            el.localName,
            elNS,
            el.prefix);

        if (el.namespaceMappings) {
            elementNode.addNamespaceMappings(el.namespaceMappings);    
        }
        
        elementNode.pos = this.getPos();

        if (this.parentNode) {
            this.parentNode.appendChild(elementNode);
        } else {
            
            elementNode.setRoot(true);

            if (!el.namespace && el.localName === 'template') {
                elementNode.namespace = 'core';
            }

            this.rootNode = elementNode;
        }

        attributes.forEach(function (attr) {
            var attrNS = attr.namespace;
            attrNS = taglibs.resolveNamespace(attrNS) || attrNS;

            var attrLocalName = attr.localName;
            var attrPrefix = attr.prefix;
            elementNode.setAttributeNS(attrNS, attrLocalName, attr.value, attrPrefix);
        }, this);
        
        this.parentNode = elementNode;
    },

    handleEndElement: function() {
        this.prevTextNode = null;
        this.parentNode = this.parentNode.parentNode;
    },

    getRootNode: function () {
        return this.rootNode;
    }
};
module.exports = ParseTreeBuilder;