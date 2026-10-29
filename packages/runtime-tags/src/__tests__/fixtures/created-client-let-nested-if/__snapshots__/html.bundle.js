// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let a = 1;
			let b = 2;
			_if(() => {
				if (input.a !== "z") {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_resume($scope2_id, "a", 3)}</span>`);
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a", 1, _write_guard($scope0_reason, 2), 0, 0, 1);
			_html(`<button class=b>b</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, {
				c: a,
				d: b,
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.a });
}, 1);
