// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p = _write_guard($scope0_reason, 2), $wi__input_p = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Card = { content: _content("a0", ({ promise }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__promise = _write_guard($scope2_reason, 0);
		_await($scope2_id, "a", promise, (x) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "a", x, $wg__promise)}</p>`);
			_write_if($scope2_reason, 0) && _scope($scope3_id, {});
		}, $wg__promise);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_p << 1);
			const $childScope = _peek_scope_id();
			Card.content({ promise: input.p });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_p && _scope_with_id($scope0_id),
				a: $wi__input_p && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.p });
}, 1);
