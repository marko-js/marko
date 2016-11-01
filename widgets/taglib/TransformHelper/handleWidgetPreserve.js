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

function addPreserve(transformHelper, bodyOnly, condition) {

    var el = transformHelper.el;
    var context = transformHelper.context;
    var builder = transformHelper.builder;

    var preserveAttrs = {};

    if (bodyOnly) {
        preserveAttrs['body-only'] = builder.literal(bodyOnly);
    }

    if (condition) {
        preserveAttrs['if'] = condition;
    }

    var widgetIdInfo = transformHelper.assignWidgetId(true /* repeated */);
    var idVarNode = widgetIdInfo.idVarNode ? null : widgetIdInfo.createIdVarNode();

    preserveAttrs.id = transformHelper.getIdExpression();

    var preserveNode = context.createNodeForEl('w-preserve', preserveAttrs);
    var idVarNodeTarget;

    if (bodyOnly) {
        el.moveChildrenTo(preserveNode);
        el.appendChild(preserveNode);
        idVarNodeTarget = el;
    } else {
        el.wrapWith(preserveNode);
        idVarNodeTarget = preserveNode;
    }

    if (idVarNode) {
        idVarNodeTarget.onBeforeGenerateCode((event) => {
            event.insertCode(idVarNode);
        });
    }

    return preserveNode;
}

module.exports = function handleWidgetPreserve() {
    var el = this.el;

    if (el.hasAttribute('w-preserve')) {
        el.removeAttribute('w-preserve');
        addPreserve(this, false);
    } else if (el.hasAttribute('w-preserve-if')) {
        let preserveIfAttr = el.getAttribute('w-preserve-if');
        var preserveIfCondition = preserveIfAttr.argument;
        if (!preserveIfCondition) {
            this.addError('The `w-preserve-if` attribute should have an argument. For example: <div w-preserve-if(someCondition)>');
            return;
        }
        addPreserve(this, false, this.builder.expression(preserveIfCondition));
        el.removeAttribute('w-preserve-if');
    } else if (el.hasAttribute('w-preserve-body')) {
        el.removeAttribute('w-preserve-body');
        addPreserve(this, true);
    } else if (el.hasAttribute('w-preserve-body-if')) {
        let preserveBodyIfAttr = el.getAttribute('w-preserve-body-if');
        var preserveBodyIfCondition = preserveBodyIfAttr.argument;
        if (!preserveBodyIfCondition) {
            this.addError('The `w-preserve-body-if` attribute should have an argument. For example: <div w-preserve-body-if(someCondition)>');
            return;
        }

        addPreserve(this, true, this.builder.expression(preserveBodyIfCondition));
        el.removeAttribute('w-preserve-body-if');
    }
};