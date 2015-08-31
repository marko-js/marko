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

function addPreserve(transformHelper, bodyOnly, condition) {
    var template = transformHelper.template;
    var compiler = transformHelper.compiler;
    var node = transformHelper.node;

    var preserveNode = compiler.createTagHandlerNode('w-preserve');
    transformHelper.assignWidgetId(true /* repeated */);

    if (bodyOnly) {
        preserveNode.setProperty('bodyOnly', template.makeExpression(bodyOnly));
    }

    if (condition) {
        preserveNode.setProperty('if', template.makeExpression(condition));
    }

    var nextVarId = template.data.nextWidgetPreserveId;
    if (nextVarId == null) {
        nextVarId = template.data.nextWidgetPreserveId = 0;
    }

    var idVarName = '__preserve' + (template.data.nextWidgetPreserveId++);
    var idExpression = template.makeExpression(idVarName);
    if (node.tag) {
        transformHelper.getWidgetArgs().setId(template.makeExpression('"!"+' + idExpression));
    } else {
        node.setAttribute('id', idExpression);
    }

    preserveNode.setProperty('id', idExpression);

    var varNode = compiler.createNode('var', {
        name: idVarName,
        value: transformHelper.getIdExpression()
    });

    node.parentNode.insertBefore(varNode, node);

    if (bodyOnly) {
        node.forEachChild(function(childNode) {
            preserveNode.appendChild(childNode);
        });

        node.appendChild(preserveNode);
    } else {
        node.parentNode.replaceChild(preserveNode, node);
        preserveNode.appendChild(node);
    }

    return preserveNode;
}

module.exports = function handleWidgetPreserve() {
    var node = this.node;
    var props = this.nodeProps;

    var widgetPreserve;
    if ((widgetPreserve = props['w-preserve']) != null) {
        node.removeProperty('w-preserve');
        addPreserve(this, false);
    }

    var widgetPreserveIf;
    if ((widgetPreserveIf = props['w-preserve-if']) != null) {
        node.removeProperty('w-preserve-if');
        addPreserve(this, false, widgetPreserveIf);
    }

    var widgetPreserveBody;
    if ((widgetPreserveBody = props['w-preserve-body']) != null) {
        node.removeProperty('w-preserve-body');
        addPreserve(this, true);
    }

    var widgetPreserveBodyIf;
    if ((widgetPreserveBodyIf = props['w-preserve-body-if']) != null) {
        node.removeProperty('w-preserve-body-if');
        addPreserve(this, true, widgetPreserveBodyIf);
    }
};