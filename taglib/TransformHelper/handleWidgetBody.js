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

module.exports = function handleWidgetBody() {
    var props = this.nodeProps;
    var template = this.template;
    var node = this.node;
    var compiler = this.compiler;

    var widgetBody = props['w-body'];
    if (widgetBody == null) {
        return;
    }

    var widgetTagNode = this.getContainingWidgetNode({ allowExtend: true });

    if (!widgetTagNode) {
        node.addError('w-body can only be used within the scope of w-bind');
        return;
    }
    var idExpression;

    if (widgetBody) {
        this.assignWidgetId(true /* repeated */);

        var nextVarId = template.data.nextWidgetBodyId;
        if (nextVarId == null) {
            nextVarId = template.data.nextWidgetBodyId = 0;
        }

        var idVarName = '__widgetBody' + (template.data.nextWidgetBodyId++);

        var varNode = compiler.createNode('var', {
            name: idVarName,
            value: this.getIdExpression()
        });

        node.parentNode.insertBefore(varNode, node);


        idExpression = template.makeExpression(idVarName);
        if (node.tag) {
            this.getWidgetArgs().setId(template.makeExpression('"!"+' + idExpression));
        } else {
            node.setAttribute('id', idExpression);
        }
    } else {
        widgetBody = 'data.widgetBody';

        if (widgetTagNode) {
            widgetTagNode.setProperty('body', this.getNestedIdExpression());
        }

        idExpression = this.getIdExpression();
    }

    this.node.appendChild(this.compiler.createNode('w-body', {
        id: idExpression,
        body: widgetBody
    }));
};