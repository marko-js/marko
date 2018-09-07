var expect = require("chai").expect;
var domData = require("../../../../src/components/dom-data");
var vElementByDOMNode = domData.___vElementByDOMNode;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var rootEl = component.getEl();
    var itemIds = ["child-a", "child-b", "child-c"];

    itemIds.forEach(id => component.addItem(id));
    component.update();

    var curLookup = getKeyLookup();

    component.removeItem(itemIds[1]);
    component.update();

    ensurePreservedKeys(curLookup, (curLookup = getKeyLookup()));

    component.removeItem(itemIds[0]);
    component.update();

    ensurePreservedKeys(curLookup, (curLookup = getKeyLookup()));

    function getKeyLookup(els) {
        els = els || rootEl.children;
        var lookup = {};

        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            var component = helpers.getComponentForEl(el);
            var key = vElementByDOMNode.get(el).___key;
            lookup[key] = {
                el: el,
                component: component,
                children: getKeyLookup(el.children)
            };
        }

        return lookup;
    }

    function ensurePreservedKeys(lookupA, lookupB, path) {
        path = path || "";
        for (var key in lookupB) {
            if (lookupA[key]) {
                var fullPath = path + " " + key;
                expect(
                    lookupA[key].el === lookupB[key].el,
                    'unpreserved element "' + fullPath + '"'
                ).to.equal(true);
                expect(
                    lookupA[key].component === lookupB[key].component,
                    'unpreserved component "' + fullPath + '"'
                ).to.equal(true);
                ensurePreservedKeys(
                    lookupA[key].children,
                    lookupB[key].children,
                    fullPath
                );
            }
        }
    }
};
