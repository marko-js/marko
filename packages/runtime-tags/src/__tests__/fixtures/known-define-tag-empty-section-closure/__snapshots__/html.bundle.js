// tags/test.marko
var test_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const count = 123;
	({ content: _content("b0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_x = _write_guard($scope1_reason, 0), $wi__input_x = _write_if($scope1_reason, 0);
		_if(() => {
			if (input.x) {
				const $scope2_id = _scope_id();
				_html(`<div>${_escape(count)}</div>`);
				$wi__input_x && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", $wg__input_x, $wg__input_x, 0, 0, 1);
		$wi__input_x && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) }).content({ x: 1 });
	_scope($scope0_id, { b: count });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, "</div>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
