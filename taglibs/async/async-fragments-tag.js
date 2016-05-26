var clientReorder = require('./client-reorder');

module.exports = function(input, out) {
    var global = out.global;

    out.flush();

    var asyncOut = out.beginAsync({ last: true, timeout: -1, name: 'async-fragments' });
    out.onLast(function(next) {
        var asyncFragmentsContext = global.__asyncFragments;

        if (!asyncFragmentsContext || !asyncFragmentsContext.fragments.length) {
            asyncOut.end();
            next();
            return;
        }

        var remaining = asyncFragmentsContext.fragments.length;

        var done = false;

        function handleAsyncFragment(fragmentInfo) {
            fragmentInfo.asyncValue.done(function(err, html) {
                if (done) {
                    return;
                }

                if (err) {
                    done = true;
                    return asyncOut.error(err);
                }

                if (!global._afRuntime) {
                    asyncOut.write(clientReorder.getCode());
                    global._afRuntime = true;
                }

                asyncOut.write('<div id="af' + fragmentInfo.id + '" style="display:none">' +
                    html +
                    '</div>' +
                    '<script type="text/javascript">$af(' +
                        (typeof fragmentInfo.id === 'number' ? fragmentInfo.id : '"' + fragmentInfo.id + '"') +
                        (fragmentInfo.after ? (',"' + fragmentInfo.after + '"') : '' ) +
                    ')</script>');

                fragmentInfo.out.writer = asyncOut.writer;

                out.emit('asyncFragmentFinish', fragmentInfo);

                out.flush();

                if (--remaining === 0) {
                    done = true;
                    asyncOut.end();
                    next();
                }
            });
        }

        asyncFragmentsContext.fragments.forEach(handleAsyncFragment);

        out.on('asyncFragmentBegin', function(fragmentInfo) {
            if (fragmentInfo.clientReorder !== true) {
                // We only care about async fragments that need to be
                // reordered in the browser
                return;
            }

            remaining++;
            handleAsyncFragment(fragmentInfo);
        });

        // Now that we have a listener attached, we want to receive any additional
        // out-of-sync fragments via an event
        delete asyncFragmentsContext.fragments;
    });
};