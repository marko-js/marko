// template.marko
_shells({ a: "a !a0 a1; c ;<input><p id=out>-</p><button>interactive</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_attrs = _filled_guard($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<input${_attrs({
		type: "checkbox",
		...input.attrs,
		checked: input.on
	}, "a", $scope0_id, "input", 1, $scope0_reason, 0)}>${_el_mark($scope0_id, "a")}<p id=out>-</p><button>interactive</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_patch_render($scope0_id, "a2", [$fg__input_attrs && "e", $fg__input_on && "f"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.attrs,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.on
	}) || ($fg__input_attrs && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.attrs, !_server_guard($scope0_reason, 1)), $fg__input_on && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.on, !_server_guard($scope0_reason, 2)));
}, 1);
