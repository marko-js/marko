// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<button></button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
