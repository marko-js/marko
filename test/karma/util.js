require('chai').Assertion.includeStack = true;

function cleanup() {

    window.testData = {
        widgets: {

        },
        addWidget: function(name, widget) {
            var widgetList = window.testData.widgets[name] || (window.testData.widgets[name] = []);
            widgetList.push(widget);
        }
    };

    var targetEl = document.getElementById('target');
    if (targetEl) {
        targetEl.parentNode.removeChild(targetEl);
    }

    var div = document.createElement('div');
    div.id = 'target';
    document.body.appendChild(div);
}

exports.cleanup = cleanup;

Object.defineProperty(
    exports,
    'targetEl',
    {
        get: function () {
            return document.getElementById('target');
        }
    });