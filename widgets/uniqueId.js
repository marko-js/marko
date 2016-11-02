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

function IdProvider(out) {
    var global = this.global = out.global;
    this.prefix = global.widgetIdPrefix || 'w';

    if (global._nextWidgetId == null) {
        global._nextWidgetId = 0;
    }
}

IdProvider.prototype.nextId = function() {
    return this.prefix + (this.global._nextWidgetId++);
};

module.exports = function (out) {
    var global = out.global;
    var idProvider = global._widgetIdProvider ||
        (global._widgetIdProvider = new IdProvider(out));

    return idProvider.nextId();
};