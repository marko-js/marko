// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>Click me</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_onClick");
	writeScope($scope0_id, { input_onClick: input.onClick }, "__tests__/template.marko", 0, { input_onClick: ["input.onClick"] });
}, 1);
