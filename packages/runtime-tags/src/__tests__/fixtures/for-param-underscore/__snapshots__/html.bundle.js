// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_for_of(["ab", "cde"], (_, i) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_escape(_)}:<!>${_escape(n)}${_el_resume($scope1_id, "c")}</div>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, {
			f: _?.length,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 0, 0, 0, 1);
	writeScope($scope0_id, { b: n });
	_resume_branch($scope0_id);
}, 1);
