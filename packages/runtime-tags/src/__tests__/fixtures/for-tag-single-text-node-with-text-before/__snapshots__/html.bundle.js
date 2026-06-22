// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let children = [1];
	_html(`<div${_attr("data-children", children.length)}>Before `);
	_for_of(children, () => {
		const $scope1_id = _scope_id();
		_html("Child");
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "b", void 0, void 0, void 0, 0, 0, 1);
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: children });
	_resume_branch($scope0_id);
}, 1);
