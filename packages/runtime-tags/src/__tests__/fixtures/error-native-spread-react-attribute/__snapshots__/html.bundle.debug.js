// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attrs(input.attrs, "#div/0", $scope0_id, "div")}>Hello</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#3");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0, { "EventAttributes:#div/0": ["...input.attrs", "1:9"] });
}, 1);
