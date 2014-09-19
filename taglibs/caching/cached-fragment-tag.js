'use strict';
var raptorCache;
var defaultCacheManager;
var req = require; // Fool the optimizer


module.exports = {
    render: function (input, out) {
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
                        'marko/cached-fragment': {
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

        var cache = cacheManager.getCache(input.cacheName || 'marko/cached-fragment');

        var asyncContext = out.beginAsync();

        cache.get(cacheKey,
            {
                builder: function(callback) {
                    var result = out.captureString(function () {
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
