// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = "<";
	let close = "/script>";
	let payload = "<img src=x onerror=alert(1)>";
	_html(`<script${_attr_nonce()}>${_escape_script(`var x = '${_to_text(open)}${_to_text(close)}${_to_text(payload)}'`)}<\/script>`);
}, 1);
