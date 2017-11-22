exports.templateData = {
    renderBody(out, name) {
        out.beginElement('div');
        out.text(name);
        out.endElement();
    }
};