// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p = _write_guard($scope0_reason, 2), $wi__input_p = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Card = { content: _content("__tests__/template.marko_2*content", ({ promise }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__promise = _write_guard($scope2_reason, 0);
		_await($scope2_id, "#text/0", promise, (x) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "#text/0", x, $wg__promise)}</p>`);
			_write_if($scope2_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "2:4");
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
				"#childScope/0": $wi__input_p && _existing_scope($childScope)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_p: input.p }, "__tests__/template.marko", 0, { input_p: ["input.p"] });
}, 1);
