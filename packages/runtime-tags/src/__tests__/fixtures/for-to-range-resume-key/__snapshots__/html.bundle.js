// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_for_to(4, 2, 1, (n) => {
		const $scope1_id = _scope_id();
		_html(`<button>n=${_escape(n)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 1);
	writeScope($scope0_id, { b: void 0 });
	_resume_branch($scope0_id);
}, 1);
