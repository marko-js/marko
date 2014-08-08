'use strict';
var raptorCache;
var defaultCacheManager;
var req = require; // Fool the raptor-optimizer


module.exports = {
    render: function (input, context) {
        if (raptorCache === undefined) {
            try {
                raptorCache = req('raptor-cache');
            }
            catch(e) {
                throw new Error('The "raptor-cache" module should be installed as an application-level dependency when using caching tags');
            }

            defaultCacheManager = raptorCache.createCacheManager({
                profiles: {
                    '*': {
                        'raptor-templates/cached-fragment': {
                            store: 'memory',
                            encoding: 'utf8'
                        }
                    }
                }
            });
        }
        
        var cacheKey = input.cacheKey;
        if (!cacheKey) {
            throw new Error('cache-key is required for <cached-fragment>');
        }

        var cacheManager = input.cacheManager || defaultCacheManager;

        var cache = cacheManager.getCache(input.cacheName || 'raptor-templates/cached-fragment');
        
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
