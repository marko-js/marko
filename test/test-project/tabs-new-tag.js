var marko = require('../../');

exports.render = function(input, out) {
    var tabs = [],
        activeFound = false;

    if (input.buildTabs) {
        input.buildTabs({
            addTab: function(tab) {
                if (tab.active) {
                    tab.activeFound = true;
                }

                tab.id = "tab" + tabs.length;
                tabs.push(tab);
            }
        });
    }

    if (!activeFound && tabs.length) {
        tabs[0].active = true;
    }

    tabs.forEach(function(tab) {
        tab.liClass = tab.active ? "active" : "";
        tab.divClass = tab.active ? "tab-pane active" : "tab-pane";
    });

    marko.render(require.resolve('./tabs.marko'), {
        tabs: tabs
    }, out);

};