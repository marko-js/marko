'use strict';
var raptorDataProviders = require('raptor-data-providers');

module.exports = {
    render: function (input, context) {
        var dataProvider = input.dataProvider;
        
        var dataProviders = raptorDataProviders.forContext(context, false /* don't create if missing */);

        var arg = input.arg || {};

        arg.context = context;
        context.beginAsyncFragment(function (asyncContext, asyncFragment) {
            function onError(e) {
                asyncFragment.end(e);
            }
            function renderBody(data) {
                if (asyncFragment.finished) {
                    // It looks like the fragment timed out and has already
                    // been marked as finished... do not render the body
                    return;
                }
                try {
                    if (input.invokeBody) {
                        input.invokeBody(asyncContext, data);
                    }
                    asyncFragment.end();
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
        }, input.timeout);
    }
};