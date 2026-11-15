// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.value;
	return $return;
});

// tags/label-text.marko
var label_text_default = _template("__tests__/tags/label-text.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let getLabel = child_default({ value: _resume(() => input.label, "__tests__/tags/label-text.marko_0/value", $scope0_id) });
	$wi__input_label && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/label-text.marko_0_getLabel#7/var");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_mark($scope1_id, "#text/0", getLabel(), $wg__input_label)}</span>`);
			$wi__input_label__OR__input_show && _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }, "__tests__/tags/label-text.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/2", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	$wi__input_label__OR__input_show && _scope($scope0_id, {
		input_label: $wi__input_show && input.label,
		getLabel: $wi__input_show && getLabel,
		"#childScope/0": $wi__input_label && _existing_scope($childScope)
	}, "__tests__/tags/label-text.marko", 0, {
		input_label: ["input.label"],
		getLabel: "1:8"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	label_text_default({
		show,
		label: "hello"
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
