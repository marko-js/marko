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
'use strict';
var nextTransformerId = 0;

class Transformer {
    constructor() {
        this.id = nextTransformerId++;
        this.name = null;
        this.tag = null;
        this.path = null;
        this.priority = null;
        this._func = null;
        this.properties = {};
    }

    getFunc() {
        if (!this.path) {
            throw new Error('Transformer path not defined for tag transformer (tag=' + this.tag + ')');
        }

        if (!this._func) {
            var transformer = require(this.path);

            if (typeof transformer === 'function') {
                if (transformer.prototype.process) {
                    var Clazz = transformer;
                    var instance = new Clazz();
                    instance.id = this.id;
                    this._func = instance.process.bind(instance);
                } else {
                    this._func = transformer;
                }
            } else {
                this._func = transformer.process || transformer.transform;
            }
        }
        return this._func;
    }
    toString() {
        return '[Taglib.Transformer: ' + this.path + ']';
    }
}

module.exports = Transformer;