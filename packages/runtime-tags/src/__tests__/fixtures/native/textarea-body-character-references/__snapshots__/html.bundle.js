// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<textarea>${_textarea_value("<p>hi & bye")}</textarea><textarea>${_textarea_value(`<p>x`)}</textarea><title>&lt;p&gt;hi &amp; bye</title><textarea>${_textarea_value("&lt;p&gt;hi")}</textarea>`);
}, 1);
