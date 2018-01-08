exports.templateData = {
    renderBody(out, data) {
        out.beginElement('div');
        out.text(data.name);
        out.endElement();
    }
};