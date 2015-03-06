var widgetUpdateQueue = null;
var batchUpdateStarted = false;

function batchUpdate(func) {
    batchUpdateStarted = true;
    try {
        func();
    } finally {
        batchUpdateStarted = false;
        updateWidgets();
    }
}

function updateWidgets() {
    if (!widgetUpdateQueue) {
        return;
    }

    var len = widgetUpdateQueue.length;
    if (len) {
        for (var i=0; i<len; i++) {
            widgetUpdateQueue[i].update();
        }

        widgetUpdateQueue = null;
    }
}

function queueWidgetUpdate(widget) {
    if (batchUpdateStarted) {
        if (!widgetUpdateQueue) {
            widgetUpdateQueue = [widget];
        } else {
            widgetUpdateQueue.push(widget);
        }
    } else {
        widget.update();
    }
}

exports.queueWidgetUpdate = queueWidgetUpdate;
exports.batchUpdate = batchUpdate;