// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span></span><div></div><div></div><foo-bar");
	_attrs_content(input, "#foo-bar/0", $scope0_id, "foo-bar");
	_html(`</foo-bar>${_el_mark($scope0_id, "#foo-bar/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input#2");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "EventAttributes:#foo-bar/0": ["...input", "4:18"] });
}, 1);
