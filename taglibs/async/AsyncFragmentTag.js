'use strict';
var promises = require('raptor-promises');
module.exports = {
    render: function (input, context) {
        var dataProvider = input.dataProvider;
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
                var promise;
                if (typeof dataProvider === 'function') {
                    // The data provider is a function we can call to
                    // get the data or a promise
                    promise = dataProvider(arg);
                } else {
                    promise = promises.isPromise(dataProvider) ? dataProvider : context.requestData(dataProvider, arg);    // Otherwise request the data using a data provider
                                                                                                                           // associated with the context
                }
                if (promise.resolvedValue) {
                    // Legacy "resolvedValue" support
                    renderBody(promise.resolvedValue);
                } else {
                    promises.immediateThen(promise, renderBody, onError).fail(onError);
                }
            } catch (e) {
                onError(e);
            }
        }, input.timeout);
    }
};