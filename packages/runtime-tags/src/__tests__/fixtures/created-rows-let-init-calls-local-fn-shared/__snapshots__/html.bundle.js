// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.show ? [1, 2] : [], (row) => {
		const $scope1_id = _scope_id();
		let x = input.v;
		const f = _resume((v) => v, "a0");
		let y = f(x);
		_html(`<p>${_text_resume($scope1_id, "a", y + input.w, $wg__input_w)}</p><span>${_escape(f(x))}</span>`);
		_write_if($scope0_reason, 1) && _scope($scope1_id, {
			f: _write_if($scope0_reason, 3) && y,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_show);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		e: input.v,
		f: input.w
	});
}, 1);
