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

/**
 * Helper method to return the metadata for the current widget being rendered.
 * This is, it returns the widget at the top of the widget stack.
 * @param  {AsyncWriter} out The current rendering context that holds info about rendered widgets.
 * @return {WidgetDef} The WidgetDef instance
 */
module.exports = function getCurrentWidget(out) {
    var widgets = out.global.widgets;
    if (!widgets) {
        throw new Error('No widget found');
    }

    var widget = widgets.getCurrentWidget();
    if (!widget) {
        throw new Error('No widget found');
    }

    return widget;
};