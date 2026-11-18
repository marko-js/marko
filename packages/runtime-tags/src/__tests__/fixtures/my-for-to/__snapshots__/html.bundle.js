// tags/my-for.marko
var my_for_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (num) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, [num], 0, 1, _write_guard($scope0_reason, 2));
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			M: _write_if($scope0_reason, 2) && num,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1));
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	my_for_default({
		to: 5,
		content: _content("a0", (i) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_mark($scope1_id, "a", i, _write_guard($scope1_reason, 0) * 2));
			_write_if($scope1_reason, 0) && _scope($scope1_id, {});
		}, $scope0_id)
	});
}, 1);
