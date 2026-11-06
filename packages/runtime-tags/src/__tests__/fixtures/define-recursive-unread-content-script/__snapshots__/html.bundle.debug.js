// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Countdown = { content: _content("__tests__/template.marko_1*content", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__n = _write_guard($scope1_reason, 0), $wi__n = _write_if($scope1_reason, 0);
		_html(`<span>${_text_mark($scope1_id, "#text/0", n, $wg__n)}</span>`);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__n << 1);
				const $childScope = _peek_scope_id();
				Countdown.content({ n: n - 1 });
				$wi__n && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/1", $wg__n, $wg__n);
		$wi__n && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	Countdown.content({ n: 2 });
}, 1);
