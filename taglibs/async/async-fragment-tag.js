'use strict';
var raptorDataProviders = require('raptor-data-providers');

module.exports = {
    render: function (input, context) {
        var dataProvider = input.dataProvider;
        
        var dataProviders = raptorDataProviders.forContext(context, false /* don't create if missing */);

        var arg = input.arg || {};

        arg.context = context;
        var asyncContext =context.beginAsync(input.timeout);
        
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
    }
};