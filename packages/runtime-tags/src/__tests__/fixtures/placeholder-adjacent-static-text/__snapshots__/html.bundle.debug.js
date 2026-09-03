// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = "X";
	let y = "Y";
	_html(`<div id=only-placeholders>ab${_text_resume($scope0_id, "#text/0", x, 2)}</div><div id=text-placeholder-text>mno${_text_resume($scope0_id, "#text/1", y, 2)}</div><button>update</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
