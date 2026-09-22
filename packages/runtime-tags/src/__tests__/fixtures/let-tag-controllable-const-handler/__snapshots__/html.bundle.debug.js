// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let out = "-";
	const onChange = _resume((next) => {
		out = String(next);
	}, "__tests__/template.marko_0/onChange", $scope0_id);
	let x = 1;
	_html(`<button>${_text_resume($scope0_id, "#text/1", x)}</button>${_el_resume($scope0_id, "#button/0")}<p id=out>${_text_resume($scope0_id, "#text/2", out)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "TagVariableChange:x": onChange || void 0 }, "__tests__/template.marko", 0, { "TagVariableChange:x": ["xChange", "3:6"] });
}, 1);
