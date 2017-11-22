module.exports = {
    renderer: function (input, out) {
        out.beginElement('div');
        out.text(input.name.toUpperCase());
        out.endElement();
    }
};