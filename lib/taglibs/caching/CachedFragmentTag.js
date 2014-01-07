define(
    'raptor/templating/taglibs/caching/CachedFragmentTag',
    function(require) {
        "use strict";
        
        return {
            render: function(input, context) {
                var attributes = context.attributes,
                    cacheProvider = attributes.cacheProvider,
                    cache,
                    cachedHtml,
                    cacheKey = input.cacheKey;

                if (!cacheKey) {
                    throw require('raptor').createError(new Error('cache-key is required for <caching:cached-fragment>'));
                }

                if (!cacheProvider) {
                    cacheProvider = require('raptor/caching').getDefaultProvider();
                }


                
                cache = cacheProvider.getCache(input.cacheName);
                cachedHtml = cache.get(cacheKey, function() {
                    return context.captureString(function() {
                        if (input.invokeBody) {
                            input.invokeBody();
                        }
                    });

                });
                
                context.write(cachedHtml);
            }
        };
    });