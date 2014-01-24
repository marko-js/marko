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
 * 
 * @extension Rhino
 * 
 */
'use strict';
var createError = require('raptor-util').createError;

function WrappedWriter(javaWriter) {
    this.javaWriter = javaWriter;
    this.write = function (o) {
        if (o != null) {
            this.javaWriter.write(o.toString());
        }
    };
}
require('raptor-util').extend(require('raptor-templates'), {
    rhinoRender: function (templateName, data, context) {
        if (data && typeof data === 'string') {
            try {
                data = eval('(' + data + ')');    //Convert the JSON string to a native JavaScript object
            } catch (e) {
                throw createError('Invalid JSON data passed to "' + templateName + '". Exception: ' + e, e);
            }
        }
        this.render('' + templateName, data, context);
    },
    rhinoCreateContext: function (javaWriter) {
        var context = this.createContext(new WrappedWriter(javaWriter));
        //Wrap the Java writer with a JavaScript object
        return context;
    }
});