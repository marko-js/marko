function delayedDataProvider(delay, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
}

exports.templateData = {
    getD1: () => delayedDataProvider(50),
    getD2: () => delayedDataProvider(150),
    getD3: () => delayedDataProvider(100),
    getD4: () => delayedDataProvider(200)
};
