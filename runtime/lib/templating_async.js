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
 * @extension Async
 *
 */
'use strict';
var promises = require('raptor-promises');
require('raptor-util').extend(require('raptor-templates'), {
    renderToStringAsync: function (templateName, data, context) {
        if (!context) {
            context = this.createContext();
        }
        var promise = this.renderAsync(templateName, data, context);
        var deferred = promises.defer();
        promise.then(function () {
            deferred.resolve(context.getOutput());
        }).fail(function (e) {
            deferred.reject(e);
        });
        return deferred.promise;
    },
    renderAsync: function (templateName, data, context) {
        if (!context) {
            throw new Error('context is required');
        }
        var deferred = promises.defer();
        var attributes = context.attributes;
        var asyncAttributes = attributes.async || (attributes.async = {});
        asyncAttributes.remaining = 0;
        asyncAttributes.deferred = deferred;
        try {
            this.render(templateName, data, context);
        } catch (e) {
            deferred.reject(e);
        }
        asyncAttributes.firstPassComplete = true;
        if (asyncAttributes.remaining === 0) {
            deferred.resolve(context);
        }
        return deferred.promise;
    }
});