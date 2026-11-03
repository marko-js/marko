// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			const k = 2;
			_html(`<span>${_text_resume($scope1_id, "b", input.a, _write_guard($scope0_reason, 2))}</span>${_el_resume($scope1_id, "a")}<button>${_text_resume($scope1_id, "d", x + input.a)}</button>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "a0");
			_script($scope1_id, "a1");
			_scope($scope1_id, {
				e: _write_if($scope0_reason, 2) && x,
				g: y,
				h: k,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, { e: input.a });
}, 1);
