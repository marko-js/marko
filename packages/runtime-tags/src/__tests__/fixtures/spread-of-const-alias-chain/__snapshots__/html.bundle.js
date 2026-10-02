// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const p = input.attrs;
	_html("<div");
	_attrs_content(p, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
