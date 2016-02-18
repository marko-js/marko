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

module.exports = function handleWidgetFor() {
    var el = this.el;
    if (!el.hasAttribute('w-for')) {
        return;
    }

    var widgetFor = el.getAttributeValue('w-for');

    if (widgetFor == null) {
        return;
    }


    // Handle the "w-for" attribute
    if (el.hasAttribute('for')) {
        this.addError('The "w-for" attribute cannot be used in conjuction with the "for" attribute');
    } else {
        el.setAttributeValue(
            'for',
            this.buildWidgetElIdFunctionCall(widgetFor));
    }
};