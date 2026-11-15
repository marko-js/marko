// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return input.value;
});

// tags/label-text.marko
var label_text_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let getLabel = child_default({ value: _resume(() => input.label, "c0", $scope0_id) });
	$wi__input_label && _var($scope0_id, "b", $childScope, "c1");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_mark($scope1_id, "a", getLabel(), $wg__input_label)}</span>`);
			$wi__input_label__OR__input_show && _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	$wi__input_label__OR__input_show && _scope($scope0_id, {
		f: $wi__input_show && input.label,
		h: $wi__input_show && getLabel,
		a: $wi__input_label && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	label_text_default({
		show,
		label: "hello"
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: show,
		b: _existing_scope($childScope)
	});
}, 1);
