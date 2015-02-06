require('chai').Assertion.includeStack = true;

function cleanup() {
    window.testData = {};

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