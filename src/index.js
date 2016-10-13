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
 * This module provides the runtime for rendering compiled templates.
 *
 *
 * <p>The code for the Marko compiler is kept separately
 * in the {@link raptor/templating/compiler} module.
 */
'use strict';

var AsyncStream = require('./AsyncStream');

exports.create = function (writer, options) {
    var global;
    var shouldBuffer;

    if(arguments.length === 1 && typeof writer.write !== 'function') {
        options = writer;
        writer = null;
    }

    if (options) {
        global = options.global;
        shouldBuffer = options.buffer === true;
    }

    var asyncStream = new AsyncStream(
        global,
        writer,
        null /* Internally used to pass state */,
        shouldBuffer);    //Create a new context using the writer provided

    return asyncStream;
};

exports.AsyncStream = exports.AsyncWriter /* legacy */ = AsyncStream;
exports.enableAsyncStackTrace = AsyncStream.enableAsyncStackTrace;
