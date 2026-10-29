// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let b = 1;
			_for_of([1, 2], (i) => {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", b + i)}</span>`);
				_scope($scope2_id, {
					c: i,
					_: _scope_with_id($scope1_id)
				});
			}, 0, $scope1_id, "a", 1, 0, 0, 0, 1);
			_html(`<button class=b>b</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, { c: b });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
