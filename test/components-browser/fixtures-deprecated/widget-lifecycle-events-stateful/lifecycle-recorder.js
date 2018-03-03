var widgetLifecycleEvents = {};

function recordWidgetLifecycleEvent(key, eventType) {
    var events = widgetLifecycleEvents[key] || (widgetLifecycleEvents[key] = []);
    events.push(eventType);
};

function resetWidgetLifecycleEvents() {
    widgetLifecycleEvents = {};
}

module.exports = {
    events: widgetLifecycleEvents,
    reset: resetWidgetLifecycleEvents,
    record: recordWidgetLifecycleEvent
};
    

