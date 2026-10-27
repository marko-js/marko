// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let f = input.fn;
			_html(`<button>${_text_resume($scope1_id, "b", f())}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.fn });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_show__OR__input_label << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	card_default({
		show: input.show,
		fn: _resume(function() {
			return "f:" + input.label;
		}, "a0", $scope0_id)
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		a: _existing_scope($childScope)
	});
}, 1);
