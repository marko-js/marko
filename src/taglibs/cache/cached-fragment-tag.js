'use strict';
module.exports = {
    render: function (input, out) {
        var cacheKey = input.cacheKey;
        if (!cacheKey) {
            throw new Error('cache-key is required for <cached-fragment>');
        }

        var cacheManager = input.cacheManager;

        var cache = cacheManager.getCache(input.cacheName || 'marko/cached-fragment');

        var asyncOut = out.beginAsync();

        cache.get(cacheKey,
            {
                builder: function(callback) {
                    var nestedOut = out.createOut();

                    if (input.renderBody) {
                        input.renderBody(nestedOut);
                    }

                    nestedOut
                        .on('error', callback)
                        .on('finish', function(result) {
                            callback(null, result.getOutput());
                        });

                    nestedOut.end();
                }
            }, function(err, result) {
                if (err) {
                    return asyncOut.error(err);
                }

                if (result.___cloneNode) {
                    var curChild = result.___firstChild;
                    while(curChild) {
                        asyncOut.node(curChild.___cloneNode());
                        curChild = curChild.___nextSibling;
                    }
                    asyncOut.end();
                } else {
                    asyncOut.end(result);
                }


            });
    }
};
