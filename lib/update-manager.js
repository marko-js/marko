var DataHolder = require('raptor-async/DataHolder');

var afterUpdateDataHolder = null;

var widgetUpdateQueue = null;
var batchUpdateStarted = false;
var afterUpdateDataHolder = null;
var updatesScheduled = false;

function scheduleUpdates() {
    if (updatesScheduled || batchUpdateStarted) {
        return;
    }

    updatesScheduled = true;

    process.nextTick(function() {
        updateWidgets();
    });
}

function onAfterUpdate(callback) {
    scheduleUpdates();

    if (!afterUpdateDataHolder) {
        afterUpdateDataHolder = new DataHolder();
    }

    afterUpdateDataHolder.done(callback);
}

function updateWidgets() {
    try {
        if (widgetUpdateQueue) {
            for (var i=0; i<widgetUpdateQueue.length; i++) {
                var widget = widgetUpdateQueue[i];
                widget.__updateQueued = false;
                widget.update();
            }
        }
    } finally {
        widgetUpdateQueue = null;

        if (afterUpdateDataHolder) {
            afterUpdateDataHolder.resolve();
            afterUpdateDataHolder = null;
        }
    }
}

function batchUpdate(func) {
    var isOuter = batchUpdateStarted === false;
    batchUpdateStarted = true;

    try {
        func();
    } finally {
        if (isOuter) {
            try {
                updateWidgets();
            } finally {
                batchUpdateStarted = false;
            }
        }
    }
}

function queueWidgetUpdate(widget) {
    if (widget.__updateQueued) {
        return;
    }

    widget.__updateQueued = true;

    scheduleUpdates();

    if (widgetUpdateQueue) {
        widgetUpdateQueue.push(widget);
    } else {
        widgetUpdateQueue = [widget];
    }
}

exports.queueWidgetUpdate = queueWidgetUpdate;
exports.batchUpdate = batchUpdate;
exports.onAfterUpdate = onAfterUpdate;