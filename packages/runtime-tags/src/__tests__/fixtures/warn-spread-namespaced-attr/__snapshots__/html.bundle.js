// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<svg${_attrs(input.svg, "a", $scope0_id, "svg")}><use`);
	_attrs_content(input.use, "b", $scope0_id, "use");
	_html(`</use>${_el_resume($scope0_id, "b")}</svg>${_el_resume($scope0_id, "a")}<div`);
	_attrs_content(input.div, "c", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {});
}, 1);
