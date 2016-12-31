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

                if (result.$__cloneNode) {
                    var curChild = result.firstChild;
                    while(curChild) {
                        asyncOut.node(curChild.$__cloneNode());
                        curChild = curChild.nextSibling;
                    }
                    asyncOut.end();
                } else {
                    asyncOut.end(result);
                }


            });
    }
};
