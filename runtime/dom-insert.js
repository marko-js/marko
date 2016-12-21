var events = require('./events');
var extend = require('raptor-util/extend');

function resolveEl(el) {
    if (typeof el === 'string') {
        var elId = el;
        el = document.getElementById(elId);
        if (!el) {
            throw Error('Not found: ' + elId);
        }
    }
    return el;
}

function beforeRemove(referenceEl) {
    events.emit('dom/beforeRemove', {
        el: referenceEl
    });
}

module.exports = function(target, getEl, afterInsert) {
    extend(target, {
        appendTo: function(referenceEl) {
            var el = getEl(this, referenceEl);
            resolveEl(referenceEl).appendChild(el);
            return afterInsert(this, referenceEl);
        },
        prependTo: function(referenceEl) {
            var el = getEl(this, referenceEl);
            referenceEl.insertBefore(el, referenceEl.firstChild || null);
            return afterInsert(this, referenceEl);
        },
        replace: function(referenceEl) {
            var el = getEl(this, referenceEl);
            referenceEl = resolveEl(referenceEl);
            beforeRemove(referenceEl);
            referenceEl.parentNode.replaceChild(el, referenceEl);
            return afterInsert(this, referenceEl);
        },
        replaceChildrenOf: function(referenceEl) {
            var el = getEl(this, referenceEl);
            referenceEl = resolveEl(referenceEl);

            var curChild = referenceEl.firstChild;
            while(curChild) {
                if (curChild.nodeType === 1) {
                    beforeRemove(curChild);
                }
            }

            referenceEl.innerHTML = '';
            referenceEl.appendChild(el);
            return afterInsert(this, referenceEl);
        },
        insertBefore: function(referenceEl) {
            var el = getEl(this, referenceEl);
            referenceEl = resolveEl(referenceEl);
            referenceEl.parentNode.insertBefore(el, referenceEl);
            return afterInsert(this, referenceEl);
        },
        insertAfter: function(referenceEl) {
            var el = getEl(this, referenceEl);
            referenceEl = resolveEl(referenceEl);
            el = el;
            var nextSibling = referenceEl.nextSibling;
            var parentNode = referenceEl.parentNode;
            if (nextSibling) {
                parentNode.insertBefore(el, nextSibling);
            } else {
                parentNode.appendChild(el);
            }
            return afterInsert(this, referenceEl);
        }
    });
};