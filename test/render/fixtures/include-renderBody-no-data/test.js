exports.templateData = {
    renderBody(out) {
        out.beginElement('div');
        out.text('foo');
        out.endElement();
    }
};