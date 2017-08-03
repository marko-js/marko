var expect = require('chai').expect;

module.exports = function(helpers) {
    var component = helpers.mount(require('./index'), {});

    var previousComponents = {};

    function checkOrder(letters) {
        component.input = { letters: letters };
        component.update();

        var divs = component.getEl('root').querySelectorAll('div');

        expect(divs.length).to.equal(letters.length);

        var newComponents = {};

        for(var i=0; i<letters.length; i++) {
            var letter = letters[i];

            var componentForValue = component.getComponent(letter);
            expect(componentForValue != null).to.equal(true);
            newComponents[letter] = componentForValue;

            if (previousComponents[letter]) {
                expect(previousComponents[letter]).to.equal(componentForValue);
            }

            expect(divs[i].id).to.equal(letter);
            expect(divs[i].innerHTML).to.equal(letter);
        }

        Object.keys(previousComponents).forEach(function(letter) {
            if (!(letter in newComponents)) {
                expect(previousComponents[letter].isDestroyed()).to.equal(true);
            }
        });

        previousComponents = newComponents;
    }

    checkOrder(['a', 'b', 'c', 'd', 'e']);

    // Single component swap
    checkOrder(['a', 'c', 'b', 'd', 'e']);

    // Single component removal (remove 'C')
    checkOrder(['a', 'b', 'd', 'e']);

    // Single component addition
    checkOrder(['a', 'b', 'c', 'd', 'e']);

    // Double component addition
    checkOrder(['a', 'b', 'b1', 'b2', 'c', 'd', 'e']);

    // Double component removal
    checkOrder(['a', 'b', 'c', 'd', 'e']);

    // Swap b and d
    checkOrder(['a', 'd', 'c', 'b', 'e']);

    // Swap b and d back to normal
    checkOrder(['a', 'b', 'c', 'd', 'e']);

    // Swap a and c
    checkOrder(['c', 'b', 'a', 'd', 'e']);

    // Swap c and a back to normal
    checkOrder(['a', 'b', 'c', 'd', 'e']);


    // Single component addition to START
    checkOrder(['1', 'a', 'b', 'c', 'd', 'e']);

    // Double component addition to START
    checkOrder(['3', '2', '1', 'a', 'b', 'c', 'd', 'e']);

    // Single component removal from START
    checkOrder(['2', '1', 'a', 'b', 'c', 'd', 'e']);

    // Double component removal from START
    checkOrder(['a', 'b', 'c', 'd', 'e']);


    // Single component addition to END
    checkOrder(['a', 'b', 'c', 'd', 'e', 'f']);

    // Double component addition to END
    checkOrder(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);

    // Single component removal from END
    checkOrder(['a', 'b', 'c', 'd', 'e', 'f', 'g']);

    // Double component removal from END
    checkOrder(['a', 'b', 'c', 'd', 'e']);
};
