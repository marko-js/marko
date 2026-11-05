// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of([1], (i) => {
		const $scope1_id = _scope_id();
		let y = 0;
		_html(_text_mark($scope1_id, "a", input.p1 + y, 2));
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			b: _write_if($scope0_reason, 0) && y,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", _write_guard($scope0_reason, 0), 0);
	_script($scope0_id, "a1", 0);
	_scope($scope0_id, { d: input.p1 });
}, 1);
