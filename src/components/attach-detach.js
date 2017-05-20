var eventDelegation = require('./event-delegation');
var delegateEvent = eventDelegation.___delegateEvent;
var getEventFromEl = eventDelegation.___getEventFromEl;

var componentsUtil = require('./util');
var destroyElRecursive = componentsUtil.___destroyElRecursive;
var destroyComponentForEl = componentsUtil.___destroyComponentForEl;

function handleNodeAttach(node, out) {
    if (node.nodeType === 1) {
        var target = getEventFromEl(node, 'onattach');
        if (target) {
            var data = out.data;

            var attachTargets = data.___attachTargets;
            if (!attachTargets) {
                attachTargets = data.___attachTargets = [];
                out.on('___componentsInitialized', function() {
                    for (var i=0; i<attachTargets.length; i+=2) {
                        var node = attachTargets[i];
                        var target = attachTargets[i+1];
                        delegateEvent(node, target, {});
                    }
                });
            }

            attachTargets.push(node);
            attachTargets.push(target);
        }
    }
}

function handleNodeDetach(node) {
    if (node.nodeType === 1) {
        var target = getEventFromEl(node, 'ondetach');
        if (target) {
            var allowDetach;

            delegateEvent(node, target, {
                preventDefault: function() {
                    allowDetach = false;
                    destroyComponentForEl(node);
                    destroyElRecursive(node);
                },
                detach: function() {
                    var parentNode = node.parentNode;
                    if (parentNode) {
                        parentNode.removeChild(node);
                    }
                }
            });

            return allowDetach;
        }
    }
}

eventDelegation.___handleNodeAttach = handleNodeAttach;
eventDelegation.___handleNodeDetach = handleNodeDetach;
