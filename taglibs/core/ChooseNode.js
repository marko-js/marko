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
var strings = require('raptor-strings');
var WhenNode = require('./WhenNode');
var OtherwiseNode = require('./OtherwiseNode');
function ChooseNode(props) {
    ChooseNode.$super.call(this);
}
ChooseNode.prototype = {
    doGenerateCode: function (template) {
        var otherwiseNode = null;
        var foundWhenNode = false;
        var allowedNodes = [];
        this.forEachChild(function (child) {
            if (child.isTextNode()) {
                if (!strings.isEmpty(child.getText())) {
                    this.addError('Static text "' + strings.trim(child.getText()) + '" is not allowed in ' + this.toString() + ' tag.');
                }
            } else if (child.getNodeClass() === WhenNode) {
                if (otherwiseNode) {
                    this.addError(otherwiseNode + ' tag must be last child of tag ' + this + '.');
                    return;
                }
                if (!foundWhenNode) {
                    foundWhenNode = true;
                    child.firstWhen = true;
                }
                allowedNodes.push(child);
            } else if (child.getNodeClass() === OtherwiseNode) {
                if (otherwiseNode) {
                    this.addError('More than one ' + otherwiseNode + ' tag is not allowed as child of tag ' + this + '.');
                    return;
                }
                otherwiseNode = child;
                allowedNodes.push(otherwiseNode);
            } else {
                this.addError(child + ' tag is not allowed as child of tag ' + this + '.');
                child.generateCode(template);    //Generate the code for the children so that we can still show errors to the user for nested nodes
            }
        }, this);
        allowedNodes.forEach(function (child, i) {
            child.hasElse = i < allowedNodes.length - 1;
            child.generateCode(template);
        });
        if (!foundWhenNode) {
            this.addError('' + otherwiseNode + ' tag is required to have at least one sibling <c:when> tag.');
        }
    }
};
require('raptor-util').inherit(ChooseNode, require('../../compiler').Node);
module.exports = ChooseNode;