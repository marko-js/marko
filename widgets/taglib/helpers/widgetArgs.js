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

var extend = require('raptor-util/extend');

var widgetArgsHelper = module.exports = function widgetArgsHelper(out, scope, assignedId, customEvents, extendModule, extendConfig, extendState) {
    var data = out.data;
    var widgetArgs = data.widgetArgs;
    var id;

    if (!widgetArgs) {
        if (assignedId != null) {
            id = assignedId.toString();
        }

        widgetArgs = data.widgetArgs = {
            out: out,
            id: id,
            scope: scope,
            customEvents: customEvents
        };
    }

    if (extendModule) {
        if (widgetArgs.extend) {
            // The nested extends should come before the outer extends
            // since the extends are applied from left to right and the
            // outer widget will expect for the inner widget to have been
            // patched
            widgetArgs.extend.push(extendModule);
        } else {
            widgetArgs.extend = [extendModule];
        }
    }

    // Merge in the extend config...
    if (extendConfig) {
        widgetArgs.extendConfig = widgetArgs.extendConfig ?
            extend(extendConfig, widgetArgs.extendConfig) :
            extendConfig;
    }

    // Merge in the extend state...
    if (extendState) {
        widgetArgs.extendState = widgetArgs.extendState ?
            extend(extendState, widgetArgs.extendState) :
            extendState;
    }
};

widgetArgsHelper.cleanup = function(out) {
    delete out.data.widgetArgs;
};