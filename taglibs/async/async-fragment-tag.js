'use strict';
var raptorDataProviders = require('raptor-data-providers');

module.exports = function render(input, context) {
    var dataProvider = input.dataProvider;
    
    var dataProviders = raptorDataProviders.forContext(context, false /* don't create if missing */);

    var arg = input.arg || {};

    arg.context = context;
    var asyncContext = context.beginAsync(input.timeout);
    
    function onError(e) {
        asyncContext.error(e || 'Async fragment failed');
    }
    
    function renderBody(data) {
        try {
            if (input.invokeBody) {
                input.invokeBody(asyncContext, data);
            }
            asyncContext.end();
        } catch (e) {
            onError(e);
        }
    }

    var method = input.method;
    if (method) {
        dataProvider = dataProvider[method].bind(dataProvider);
    }

    try {
        dataProviders.requestData(dataProvider, arg, function(err, data) {
            if (err) {
                return onError(err);
            }

            renderBody(data);
        });
    } catch (e) {
        onError(e);
    }
};