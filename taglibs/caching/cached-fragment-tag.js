'use strict';
var raptorCache;
var defaultCacheManager;
var req = require; // Fool the optimizer

var caches = {};

function createCache() {
    var cache = {};

    return {
        get: function(cacheKey, options, callback) {
            var value = cache[cacheKey];
            if (value !== undefined) {
                return callback(null, value);
            }

            var builder = options.builder;
            builder(function(err, value) {
                if (err) {
                    return callback(err);
                }

                if (value === undefined) {
                    value = null;
                }

                cache[cacheKey] = value;

                callback(null, value);
            });
        }
    };
}

var defaultCacheManager = {
    getCache: function(cacheName) {
        return caches[cacheName] || (caches[cacheName] = createCache());
    }
};

module.exports = {
    render: function (input, out) {
        if (raptorCache === undefined) {
            try {
                raptorCache = req('raptor-cache');
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
            catch(e) {}
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
                        if (input.renderBody) {
                            input.renderBody(out);
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
