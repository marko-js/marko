// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let children = [1];
	_html(`<div${_attr("data-children", children.length)}>`);
	_for_of(children, () => {
		const $scope1_id = _scope_id();
		_html("<div></div>");
		writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1, 1);
	_script($scope0_id, "__tests__/template.marko_0_children");
	writeScope($scope0_id, { children }, "__tests__/template.marko", 0, { children: "1:6" });
	_resume_branch($scope0_id);
}, 1);
