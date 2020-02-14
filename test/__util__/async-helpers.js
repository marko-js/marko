exports.promiseProvider = async (delay, value) => {
    while (1 + delay--) {
        await immediatePromise();
    }
    if (value instanceof Error) {
        throw value;
    } else {
        return value;
    }
};

exports.callbackProvider = (delay, value) => {
    return function(callback) {
        exports.promiseProvider(delay, value).then(
            resolved => callback(null, resolved),
            rejected => callback(rejected)
        );
    };
};

exports.callbackProviderWithArgs = (delay, resolver = x => x) => {
    return function(...all) {
        const args = all.slice(0, all.length - 1);
        const callback = all[all.length - 1];
        const value = resolver(...args);
        exports.callbackProvider(delay, value)(callback);
    };
};

const immediate =
    typeof setImmediate === "undefined" ? setTimeout : setImmediate;
function immediatePromise() {
    return new Promise(resolve => immediate(resolve));
}
