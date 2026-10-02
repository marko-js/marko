// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const o = input.attrs;
	_html("<div");
	_attrs_content(o, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_p#4");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "EventAttributes:#div/0": ["...p", "3:9"] });
}, 1);
