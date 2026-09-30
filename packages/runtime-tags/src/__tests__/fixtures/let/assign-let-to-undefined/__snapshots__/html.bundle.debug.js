// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let num = 1;
	const double = num && num * 2;
	_html(`<div>${_text_resume($scope0_id, "#text/0", double == null ? "none" : double)}</div><button>clear</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
