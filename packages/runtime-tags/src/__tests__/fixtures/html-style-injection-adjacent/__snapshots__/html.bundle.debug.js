// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = "<";
	let close = "/style><img src=x onerror=alert(1)>";
	_html(`<style${_attr_nonce()}>${_escape_style(`.a { color: red }${_to_text(open)}${_to_text(close)}`)}</style>`);
}, 1);
