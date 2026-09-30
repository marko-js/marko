// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;");
}, 1);
