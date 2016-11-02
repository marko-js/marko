var AsyncVDOMBuilder = require('../runtime/vdom/AsyncVDOMBuilder');
var createElement = require('marko-vdom').createElement;
var expect = require('chai').expect;

it('sync', function() {
    var out = new AsyncVDOMBuilder();
    out.element('div', {}, 0);
    var tree = out.getOutput();
    expect(tree.childNodes.length).to.equal(1);
});

it('end, then listen for finish', function(done) {
    var out = new AsyncVDOMBuilder();
    out.element('div', {}, 0);
    out.end();
    out.on('finish', function(tree) {
        expect(tree.childNodes.length).to.equal(1);
        done();
    });
});

it('async', function(done) {
    var out = new AsyncVDOMBuilder();
    out.element('div', {}, 0);
    var asyncOut = out.beginAsync();

    setTimeout(function() {
        asyncOut.element('span', {}, 0);
        asyncOut.end();
    }, 10);

    out.element('section', {}, 0);

    out.end();
    out.on('finish', function(tree) {
        expect(tree.childNodes.length).to.equal(3);
        expect(tree.firstChild.nodeName).to.equal('div');
        expect(tree.firstChild.nextSibling.nodeName).to.equal('span');
        expect(tree.firstChild.nextSibling.nextSibling.nodeName).to.equal('section');
        done();
    });
});

it('async flush', function(done) {
    var out = new AsyncVDOMBuilder();
    out.on('update', function(tree) {
        expect(tree.childNodes.length).to.equal(1);
    });
    out.once('finish', function(tree) {
        expect(tree.childNodes.length).to.equal(2);
        done();
    });

    out.element('div', {}, 0);
    out.flush();

    var asyncOut = out.beginAsync();

    setTimeout(function() {
        asyncOut.element('span', {}, 0);
        asyncOut.end();
    }, 10);

    out.end();
});

it('for loop', function(done) {
    var out = new AsyncVDOMBuilder();
    out.once('finish', function(tree) {
        var header = tree.childNodes[0];
        var list = tree.childNodes[1];
        var paragraph = tree.childNodes[2];
        expect(header.nodeName).to.equal('h1');
        expect(list.nodeName).to.equal('ul');
        expect(list.childNodes.length).to.equal(10);
        expect(paragraph.nodeName).to.equal('p');
        done();
    });

    out.element('h1', {}, 0);

    out.beginElement('ul', {});

    for(var i = 0; i < 10; i++) {
        out.element('li', {}, 1).t(i);
    }

    out.endElement();

    out.element('p', {}, 0);

    out.end();
});

it('staticNode, text, comment', function(done) {
    var staticNode = createElement('div', {}, 0, 'f891ea3');
    var out = new AsyncVDOMBuilder();

    out.node(staticNode);
    out.text('Hello <em>World</em>');
    out.comment('TODO: make this work');
    out.end();

    out.once('finish', function(tree) {
        expect(tree.childNodes[0].nodeName).to.equal('div');
        expect(tree.childNodes[1].nodeValue).to.equal('Hello <em>World</em>');
        expect(tree.childNodes[2].nodeValue).to.equal('TODO: make this work');
        done();
    });
});

it('should handle timeouts correctly');

it('should handle sync errors correctly');

it('should handle timeout errors correctly');

it('should avoid writes after end');

it('globals');