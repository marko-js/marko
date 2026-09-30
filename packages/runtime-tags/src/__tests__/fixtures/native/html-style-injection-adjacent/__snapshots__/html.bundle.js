// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<style${_attr_nonce()}>${_escape_style(`.a { color: red }${_to_text("<")}${_to_text("/style><img src=x onerror=alert(1)>")}`)}</style>`);
}, 1);
