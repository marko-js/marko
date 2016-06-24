var clientReorder = require('./client-reorder');

module.exports = function(input, out) {
    var global = out.global;

    out.flush();

    var asyncOut = out.beginAsync({ last: true, timeout: -1, name: 'await-reorderer' });
    out.onLast(function(next) {
        var awaitContext = global.__awaitContext;

        if (!awaitContext || !awaitContext.instances.length) {
            asyncOut.end();
            next();
            return;
        }

        var remaining = awaitContext.instances.length;

        var done = false;

        function handleAwait(awaitInfo) {
            awaitInfo.asyncValue.done(function(err, html) {
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

                asyncOut.write('<div id="af' + awaitInfo.id + '" style="display:none">' +
                    html +
                    '</div>' +
                    '<script type="text/javascript">$af(' +
                        (typeof awaitInfo.id === 'number' ? awaitInfo.id : '"' + awaitInfo.id + '"') +
                        (awaitInfo.after ? (',"' + awaitInfo.after + '"') : '' ) +
                    ')</script>');

                awaitInfo.out.writer = asyncOut.writer;

                out.emit('await:finish', awaitInfo);
                out.emit('asyncFragmentFinish', awaitInfo); // TODO: remove deprecated event

                out.flush();

                if (--remaining === 0) {
                    done = true;
                    asyncOut.end();
                    next();
                }
            });
        }

        awaitContext.instances.forEach(handleAwait);

        out.on('await:clientReorder', function(awaitInfo) {
            remaining++;
            handleAwait(awaitInfo);
        });

        // Now that we have a listener attached, we want to receive any additional
        // out-of-sync instances via an event
        delete awaitContext.instances;
    });
};