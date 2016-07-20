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

var markoWidgets = require('../');
var WidgetContext = markoWidgets.WidgetsContext;

module.exports = function render(input, out) {
    var widgetsContext = markoWidgets.getWidgetsContext(out);

    var options = input.immediate ? {immediate: true} : null;

    if (input.immediate === true) {
        out.on('await:beforeRender', function(eventArgs) {
            if (eventArgs.clientReorder) {
                var asyncFragmentOut = eventArgs.out;
                asyncFragmentOut.data.widgets = new WidgetContext(asyncFragmentOut);
            }
        });

        out.on('await:finish', function(eventArgs) {
            var asyncFragmentOut = eventArgs.out;

            var widgetsContext = asyncFragmentOut.data.widgets || asyncFragmentOut.global.widgets;
            if (widgetsContext) {
                markoWidgets.writeInitWidgetsCode(widgetsContext, asyncFragmentOut, options);
            }
        });
    }

    var asyncOut = out.beginAsync({ last: true, timeout: -1 });
    out.onLast(function(next) {
        if (widgetsContext.hasWidgets()) {
            markoWidgets.writeInitWidgetsCode(widgetsContext, asyncOut, options);
        }

        asyncOut.end();
        next();
    });
};