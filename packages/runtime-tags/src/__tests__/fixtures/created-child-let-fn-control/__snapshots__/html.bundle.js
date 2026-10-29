// tags/outer.marko
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<button>plain</button>${_el_resume($scope0_id, "a")}<input${_attr_input_value($scope0_id, "b", f(input.label))}>${_el_resume($scope0_id, "b")}<textarea>${_textarea_value(f(input.label))}</textarea>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		g: input.label,
		h: _write_if($scope0_reason, 0) && f
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "w-" + v, "a0");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_label << 1);
			const $childScope = _peek_scope_id();
			outer_default({
				fmt: wrap,
				label: input.label
			});
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				a: $wi__input_label && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		e: input.label,
		f: wrap
	});
}, 1);
