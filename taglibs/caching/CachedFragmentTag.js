'use strict';
var promiseUtil = require('raptor-promises/util');

module.exports = {
    render: function (input, context) {
        var attributes = context.attributes;
        var cacheProvider = attributes.cacheProvider;
        var cache;
        
        var cacheKey = input.cacheKey;
        if (!cacheKey) {
            throw new Error('cache-key is required for <caching:cached-fragment>');
        }
        if (!cacheProvider) {
            var raptorCacheModulePath;
            try {
                raptorCacheModulePath = require.resolve('raptor-cache');
            }
            catch(e) {
                throw new Error('The "raptor-cache" module should be installed as an application-level dependency when using caching tags');
            }
            cacheProvider = require(raptorCacheModulePath).getDefaultProvider();
        }
        cache = cacheProvider.getCache(input.cacheName);
        var cachePromise = cache.get(
            cacheKey,
            {
                builder: function() {
                    var result = context.captureString(function () {
                        if (input.invokeBody) {
                            input.invokeBody();
                        }
                    });
                    return result;
                }
            });

        var asyncContext = context.beginAsync();
        
        promiseUtil.immediateThen(
            cachePromise,
            function (result) {
                asyncContext.end(result);
            },
            function (e) {
                asyncContext.error(e);
            });
    }
};