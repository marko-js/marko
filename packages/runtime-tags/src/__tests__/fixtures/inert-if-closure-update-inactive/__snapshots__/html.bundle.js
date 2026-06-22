// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let value = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`${_escape(value)}${_el_resume($scope1_id, "a")}`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, 0, 1, 1);
	_html(`<button>Update</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { f: _serialize_if($scope0_reason, 0) && value });
	_resume_branch($scope0_id);
}, 1);
