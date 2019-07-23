function delayedDataProvider(delay, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
}

exports.templateData = {
    getD1: () => delayedDataProvider(Math.ceil(Math.random() * 300)),
    getD2: () => delayedDataProvider(Math.ceil(Math.random() * 300)),
    getD3: () => delayedDataProvider(Math.ceil(Math.random() * 300)),
    getD4: () => delayedDataProvider(Math.ceil(Math.random() * 300)),
    getD5: () => delayedDataProvider(Math.ceil(Math.random() * 300)),
    getD6: () => delayedDataProvider(Math.ceil(Math.random() * 300)),
    getD7: () => delayedDataProvider(Math.ceil(Math.random() * 300)),
    getD8: () => delayedDataProvider(Math.ceil(Math.random() * 300))
};

exports.noFlushComment = true;
