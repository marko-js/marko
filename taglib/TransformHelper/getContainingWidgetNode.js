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

function getContainingWidgetNode(options) {

    var allowExtend = options && options.allowExtend === true;

    if (this.containingWidgetNode !== undefined) {
        return this.containingWidgetNode;
    }

    if (allowExtend && this.containingWidgetExtendNode !== undefined) {
        return this.containingWidgetExtendNode;
    }

    var curNode = this.node;

    while (true) {
        if (curNode.qName === 'w-widget') {
            this.containingWidgetNode = curNode;
            return this.containingWidgetNode;
        } else if (allowExtend && curNode.data.widgetExtend) {
            this.containingWidgetExtendNode = curNode;
            return this.containingWidgetExtendNode;
        }

        curNode = curNode.parentNode;

        if (!curNode) {
            break;
        }
    }

    this.containingWidgetNode = null;
    this.containingWidgetExtendNode = null;

    return null;
}

module.exports = getContainingWidgetNode;