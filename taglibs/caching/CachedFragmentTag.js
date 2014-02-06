'use strict';
module.exports = {
    render: function (input, context) {
        var attributes = context.attributes;
        var cacheProvider = attributes.cacheProvider;
        var cache;
        var cachedHtml;
        var cacheKey = input.cacheKey;
        if (!cacheKey) {
            throw require('raptor').createError(new Error('cache-key is required for <caching:cached-fragment>'));
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
        cachedHtml = cache.get(cacheKey, function () {
            return context.captureString(function () {
                if (input.invokeBody) {
                    input.invokeBody();
                }
            });
        });
        context.write(cachedHtml);
    }
};