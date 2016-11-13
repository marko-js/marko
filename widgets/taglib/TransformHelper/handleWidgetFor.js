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
    var widgetFor;
    if (el.hasAttribute('for-ref')) {
        widgetFor = el.getAttributeValue('for-ref');
        el.removeAttribute('for-ref');
    }

    if (el.hasAttribute('w-for')) {
        console.warn('The "w-for" tag is deprecated. Please use "for-ref" instead.');
        if (widgetFor) {
            this.addError('The "w-for" tag cannot be used with "for-ref".');
            return;
        } else {
            widgetFor = el.getAttributeValue('w-for');
        }
        el.removeAttribute('w-for');
    }

    if (widgetFor == null) {
        return;
    }

    // Handle the "for-ref" attribute
    if (el.hasAttribute('for')) {
        this.addError('The "for-ref" and "w-for" attribute cannot be used in conjuction with the "for" attribute.');
    } else {
        el.setAttributeValue(
            'for',
            this.buildWidgetElIdFunctionCall(widgetFor));
    }
};
