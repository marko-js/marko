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
var DocTypeNode = require('./DocTypeNode');

module.exports = function transform(node, compiler) {
    if (node.isElementNode()) {
        var options = compiler.options || {};
        var preserveWhitespace = options.preserveWhitespace || {};
        var allowSelfClosing = options.allowSelfClosing || {};
        var startTagOnly = options.startTagOnly || {};
        var lookupKey = node.namespace ? node.namespace + ':' + node.localName : node.localName;

        if (node.isPreserveWhitespace() == null) {
            if (preserveWhitespace[lookupKey] === true) {
                node.setPreserveWhitespace(true);
            }
        }
        if (allowSelfClosing[lookupKey] === true) {
            node.setAllowSelfClosing(true);
        }
        if (compiler.options.xhtml !== true && startTagOnly[lookupKey] === true) {
            node.setStartTagOnly(true);
        }

        var doctype;

        if (node.getQName() === 'html' && (doctype = node.getProperty('html-doctype'))) {

            var docTypeNode = compiler.createNode(DocTypeNode, {
                    value: doctype,
                    pos: node.getPosition()
                });
            node.parentNode.insertBefore(docTypeNode, node);
        }
    }
};