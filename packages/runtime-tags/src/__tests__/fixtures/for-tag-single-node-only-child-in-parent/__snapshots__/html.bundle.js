// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let children = [1];
	_html(`<div${_attr("data-children", children.length)}>`);
	_for_of(children, () => {
		const $scope1_id = _scope_id();
		_html("<div></div>");
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { b: children });
	_resume_branch($scope0_id);
}, 1);
