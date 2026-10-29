// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let b = 1;
			_html(`<span>${_text_resume($scope1_id, "a", input.a + b)}</span><button class=b>b</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, {
				c: b,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, { e: input.a });
}, 1);
