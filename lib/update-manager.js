var widgetUpdateQueue = null;
var batchUpdateStarted = 0;

function batchUpdate(func) {
    batchUpdateStarted++;

    try {
        func();
    } finally {
        if (batchUpdateStarted - 1 === 0) {
            try {
                updateWidgets();
            } finally {
                batchUpdateStarted = 0;
            }
        }
    }
}

function updateWidgets() {
    if (!widgetUpdateQueue) {
        return;
    }

    for (var i=0; i<widgetUpdateQueue.length; i++) {
        var widget = widgetUpdateQueue[i];
        widget.__updateQueued = false;
        widget.update();
    }

    widgetUpdateQueue = null;
}

function queueWidgetUpdate(widget) {
    if (batchUpdateStarted) {
        if (this.__updateQueued) {
            return;
        }

        if (!widgetUpdateQueue) {
            widgetUpdateQueue = [widget];
        } else {
            widgetUpdateQueue.push(widget);
        }
        widget.__updateQueued = true;
    } else {
        widget.update();
    }
}

exports.queueWidgetUpdate = queueWidgetUpdate;
exports.batchUpdate = batchUpdate;