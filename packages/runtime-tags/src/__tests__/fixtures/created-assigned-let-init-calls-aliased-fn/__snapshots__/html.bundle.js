// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			let y = _resume((v) => v, "a0")(x);
			_html(`<button>set</button>${_el_resume($scope1_id, "a")}<p>${_text_resume($scope1_id, "b", y + input.w)}</p>`);
			_script($scope1_id, "a1");
			_scope($scope1_id, {
				e: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.v,
		f: input.w
	});
}, 1);
