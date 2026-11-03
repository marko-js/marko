// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 2), $wg__input_v = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "a", input.v, $wg__input_v)}</span>`);
	_if(() => {
		if (input.v) {
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", input.a, $wg__input_a)}</em>`);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", _write_guard($scope0_reason, 0), $wg__input_v, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { f: input.a });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			_set_scope_reason($wg__input_a << 1 | $wg__input_a << 5);
			const $childScope = _peek_scope_id();
			child_default({
				v: y,
				a: input.a
			});
			_html(`<button>${_text_resume($scope1_id, "c", x + input.a)}</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_scope($scope1_id, {
				d: $wi__input_a && x,
				_: _scope_with_id($scope0_id),
				a: $wi__input_a && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, { e: input.a });
}, 1);
