// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<script${_attr_nonce()}>${_escape_script(`var x = '${_to_text("<\/SCRIPT>")}'`)}<\/script>`);
}, 1);
