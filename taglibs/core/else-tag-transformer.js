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
module.exports = function transform(node, compiler) {
    var curNode = node.previousSibling;
    var matchingNode;
    var IfNode = compiler.getNodeClass('if');
    var UnlessNode = compiler.getNodeClass('unless');
    var ElseIfNode = compiler.getNodeClass('else-if');
    var whitespaceNodes = [];
    while (curNode) {
        if (curNode.getNodeClass() === ElseIfNode || curNode.getNodeClass() === IfNode || curNode.getNodeClass() === UnlessNode) {
            matchingNode = curNode;
            break;
        } else if (curNode.isTextNode()) {
            var trimmed = curNode.getText().trim();
            if (trimmed !== '') {
                node.addError('Static text "' + trimmed + '" is not allowed before ' + node.toString() + ' tag.');
                return;
            } else {
                whitespaceNodes.push(curNode);
            }
        } else {
            node.addError(curNode + ' is not allowed before ' + node.toString() + ' tag.');
            return;
        }
        curNode = curNode.previousSibling;
    }
    if (!matchingNode) {
        node.addError('<if>, <unless> or <else-if> node not found immediately before ' + node.toString() + ' tag.');
        return;
    }
    whitespaceNodes.forEach(function (whitespaceNode) {
        whitespaceNode.parentNode.removeChild(whitespaceNode);
    });
    matchingNode.hasElse = true;
    node.valid = true;
};
