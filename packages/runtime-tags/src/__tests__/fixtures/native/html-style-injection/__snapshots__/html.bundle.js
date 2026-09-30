// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<style${_attr_nonce()}>${_escape_style(`.evil { content: '${_to_text("</STYLE>")}'; }`)}</style>`);
}, 1);
