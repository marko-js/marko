var expect = require('chai').expect;

function Widget(config) {
    this.name = 'app-foo';
    window.testData.addWidget('app-foo', this);
    this.config = config;
    this.widgets.bar.appendHtml('FOO');
}

Widget.prototype = {
    testDestroy: function() {
        var appBarWidget = this.widgets.bar;

        var eventsFired = {};

        appBarWidget
            .on('destroy', function() {
                eventsFired.destroy = true;
            })
            .on('beforeDestroy', function() {
                eventsFired.beforeDestroy = true;
            });

        expect(this.isDestroyed()).to.equal(false);
        expect(appBarWidget.isDestroyed()).to.equal(false);

        this.destroy();

        expect(this.isDestroyed()).to.equal(true);
        expect(appBarWidget.isDestroyed()).to.equal(true);
        expect(eventsFired.destroy).to.equal(true);
        expect(eventsFired.beforeDestroy).to.equal(true);
    },

    testCustomEvents: function() {
        var testEventFired = false;

        this.widgets.bar.on('testEvent', function(a, b) {
            expect(a).to.equal('a');
            expect(b).to.equal('b');
            testEventFired = true;
        });

        this.widgets.bar.emitTestEvent();

        expect(testEventFired).to.equal(true);
    },

    testDOMLookup: function() {
        expect(this.el).to.equal(this.getEl());
        expect(this.getEl('config').className).to.equal('config');
        // Make sure the generated element ID starts with the widget ID
        expect(this.getEl('config').id.substring(0, this.el.id.length)).to.equal(this.el.id);
    },

    testWidgetCollection: function() {
        expect(this.widgets.bar).to.be.an('object');
        expect(this.widgets.bar2).to.be.an('object');
        expect(this.widgets.barArray.length).to.equal(2);
        expect(this.widgets.barArray[0].label).to.equal('1');
        expect(this.widgets.barArray[1].label).to.equal('2');
        expect(this.widgets.barArrayImplicit[0].label).to.equal('a1');
        expect(this.widgets.barArrayImplicit[1].label).to.equal('a2');
    },

    testDeclarativeCustomEvents: function() {

        var received1 = [];
        var received2 = [];

        this.handleTestEvent1 = function() {
            received1.push({
                args: arguments,
                widget: arguments[arguments.length -1]
            });
        };

        this.handleTestEvent2 = function() {
            received2.push({
                args: arguments,
                widget: arguments[arguments.length -1]
            });
        };

        this.widgets.customEvents.emitTestEvent1();
        expect(received1.length).to.equal(1);
        expect(received1[0].args.length).to.equal(3); // ['a', 'b', sourceWidget]
        expect(received1[0].widget).to.equal(this.widgets.customEvents);

        debugger;
        
        require('raptor-pubsub').channel('customEvents-' + this.id).emit('emitTestEvent2');

        expect(received1.length).to.equal(1);
        expect(received2.length).to.equal(1);

        expect(received2[0].args.length).to.equal(1); // [sourceWidget]
        expect(received2[0].widget).to.be.an('object');
    }
};

exports.Widget = Widget;