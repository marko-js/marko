var eventDelegation = require('./event-delegation');
var delegateEvent = eventDelegation.$__delegateEvent;
var getEventFromEl = eventDelegation.$__getEventFromEl;

var componentsUtil = require('./util');
var destroyElRecursive = componentsUtil.$__destroyElRecursive;
var destroyComponentForEl = componentsUtil.$__destroyComponentForEl;

function handleNodeAttach(node, out) {
    if (node.nodeType === 1) {
        var target = getEventFromEl(node, 'onattach');
        if (target) {
            var data = out.data;

            var attachTargets = data.$__attachTargets;
            if (!attachTargets) {
                attachTargets = data.$__attachTargets = [];
                out.on('$__componentsInitialized', function() {
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

eventDelegation.$__handleNodeAttach = handleNodeAttach;
eventDelegation.$__handleNodeDetach = handleNodeDetach;
