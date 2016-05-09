var clientReorder = require('./client-reorder');

module.exports = function(input, out) {
    var global = out.global;
    var events = global.events;

    out.flush();

    var asyncOut = out.beginAsync({ last: true, timeout: -1 });
    out.onLast(function(next) {
        var asyncFragmentsContext = global.__asyncFragments;

        if (!asyncFragmentsContext || !asyncFragmentsContext.fragments.length) {
            asyncOut.end();
            next();
            return;
        }

        var remaining = asyncFragmentsContext.fragments.length;

        var done = false;

        function handleAsyncFragment(af) {
            af.asyncValue.done(function(err, html) {
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

                asyncOut.write('<div id="af' + af.id + '" style="display:none">' +
                    html +
                    '</div>' +
                    '<script type="text/javascript">$af(' + (typeof af.id === 'number' ? af.id : '"' + af.id + '"') + (af.after ? (',"' + af.after + '"') : '' ) + ')</script>');

                af.out.writer = asyncOut.writer;

                events.emit('asyncFragmentFinish', {
                    clientReorder: true,
                    out: af.out,
                    name: af.id
                });

                out.flush();

                if (--remaining === 0) {
                    done = true;
                    asyncOut.end();
                    next();
                }
            });
        }

        asyncFragmentsContext.fragments.forEach(handleAsyncFragment);

        events.on('asyncFragmentBegin', function(af) {
            remaining++;
            handleAsyncFragment(af);
        });

        // Now that we have a listener attached, we want to receive any additional
        // out-of-sync fragments via an event
        delete asyncFragmentsContext.fragments;
    });
};