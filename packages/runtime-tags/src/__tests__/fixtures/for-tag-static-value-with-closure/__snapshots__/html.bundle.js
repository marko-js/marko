// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_to(3, 0, 1, (index) => {
		const $scope1_id = _scope_id();
		_html(`${_escape(index)}-<!>${_escape(count)}${_el_resume($scope1_id, "b")}`);
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, 0, 0, 0, 0, 1);
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: count });
	_resume_branch($scope0_id);
}, 1);
