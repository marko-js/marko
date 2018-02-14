var eventDelegation = require('./event-delegation');
var delegateEvent = eventDelegation.___delegateEvent;
var getEventFromEl = eventDelegation.___getEventFromEl;

// var componentsUtil = require('./util');
// var destroyNodeRecursive = componentsUtil.___destroyNodeRecursive;
// var destroyComponentForNode = componentsUtil.___destroyComponentForNode;

function handleNodeAttach(node, componentsContext) {
    if (node.nodeType === 1) {
        var eventName = 'onattach';
        var target = getEventFromEl(node, eventName);
        if (target) {
            var out = componentsContext.___out;
            var data = out.data;

            var attachTargets = data.___attachTargets;
            if (!attachTargets) {
                attachTargets = data.___attachTargets = [];
                out.on('___componentsInitialized', function() {
                    for (var i=0; i<attachTargets.length; i+=2) {
                        var node = attachTargets[i];
                        var target = attachTargets[i+1];
                        delegateEvent(node, eventName, target, {});
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
        var eventName = 'ondetach';
        var target = getEventFromEl(node, eventName);
        if (target) {
            var allowDetach;

            delegateEvent(node, eventName, target, {
                preventDefault: function() {
                    allowDetach = false;
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
