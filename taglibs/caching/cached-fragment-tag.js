'use strict';

var FRAGMENT_CACHE_CONFIG = {
    store: 'memory'
};

var raptorCache;

module.exports = {
    render: function (input, context) {
        if (raptorCache === undefined) {
            try {
                raptorCache = require('raptor-cache');
            }
            catch(e) {
                throw new Error('The "raptor-cache" module should be installed as an application-level dependency when using caching tags');
            }
        }
        
        var cacheKey = input.cacheKey;
        if (!cacheKey) {
            throw new Error('cache-key is required for <cached-fragment>');
        }
    
        // use the default cache manager
        var cacheManager = raptorCache.getDefaultCacheManager(context);

        var cache = cacheManager.getCacheByName(input.cacheName, FRAGMENT_CACHE_CONFIG);
        
        var asyncContext = context.beginAsync();
        
        cache.get(cacheKey,
            {
                builder: function(callback) {
                    var result = context.captureString(function () {
                        if (input.invokeBody) {
                            input.invokeBody();
                        }
                    });
                    callback(null, result);
                }
            }, function(err, result) {
                if (err) {
                    return asyncContext.error(err);
                }
                
                asyncContext.end(result);
            });
    }
};
