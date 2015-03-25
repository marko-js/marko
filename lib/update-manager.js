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
    console.log('Updating widgets BEGIN - ', widgetUpdateQueue ? widgetUpdateQueue.length : 0);
    try {
        if (widgetUpdateQueue) {
            for (var i=0; i<widgetUpdateQueue.length; i++) {
                var widget = widgetUpdateQueue[i];
                widget.__updateQueued = false;
                console.log('Updating widget: ' + widget.id);
                widget.update();
            }
        }
    } finally {
        console.log('Updating widgets END');
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

    if (isOuter) {
        console.log('Batch update BEGIN');
    }

    try {
        func();
    } finally {
        if (isOuter) {
            try {
                updateWidgets();
            } finally {
                console.log('Batch update END');
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

    console.log('Queuing widget update: ', widget.id);
    
    if (widgetUpdateQueue) {
        widgetUpdateQueue.push(widget);
    } else {
        widgetUpdateQueue = [widget];
    }
}

exports.queueWidgetUpdate = queueWidgetUpdate;
exports.batchUpdate = batchUpdate;
exports.onAfterUpdate = onAfterUpdate;