module.exports = function handleWidgetFor() {
    var el = this.el;
    var context = this.context;

    var widgetFor;
    if (el.hasAttribute('for-ref')) {
        widgetFor = el.getAttributeValue('for-ref');
        el.removeAttribute('for-ref');
    }

    if (el.hasAttribute('w-for')) {
        context.deprecate('The "w-for" tag is deprecated. Please use "for-ref" instead.');
        if (widgetFor) {
            this.addError('The "w-for" tag cannot be used with "for-ref".');
            return;
        } else {
            widgetFor = el.getAttributeValue('w-for');
        }
        el.removeAttribute('w-for');
    }

    if (widgetFor == null) {
        return;
    }

    // Handle the "for-ref" attribute
    if (el.hasAttribute('for')) {
        this.addError('The "for-ref" and "w-for" attribute cannot be used in conjuction with the "for" attribute. (' + (el.pos ? context.getPosInfo(el.pos) : context.filename) + ')');
    } else {
        el.setAttributeValue(
            'for',
            this.buildWidgetElIdFunctionCall(widgetFor));
    }
};
