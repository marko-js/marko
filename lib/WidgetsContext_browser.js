'use strict';
module.exports = {
    initWidgets: function () {
        var widgetDefs = this.widgets;
        var widgets = require('./');
        widgetDefs.forEach(function (widgetDef) {
            widgets.initWidget(widgetDef);
        });
        this.clearWidgets();
    }
};