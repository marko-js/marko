'use strict';
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
                context.requestData(dataProvider, arg, function(err, data) {
                    if (err) {
                        return onError(e);
                    }

                    renderBody(data);
                });
            } catch (e) {
                onError(e);
            }
        }, input.timeout);
    }
};