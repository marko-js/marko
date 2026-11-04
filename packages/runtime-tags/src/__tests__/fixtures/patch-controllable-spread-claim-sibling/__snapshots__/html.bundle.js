// template.marko
_shells({ a: "a !a0 a1 a2; b c ;<input><input><p id=out>-</p><button>interactive</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_attrs__OR__input_on = _unfilled_if($scope0_reason, 0), $ui__input_on = _unfilled_if($scope0_reason, 2), $ui__input_attrs = _unfilled_if($scope0_reason, 1), $fg__input_attrs = _filled_guard($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<input${_attrs({
		type: "checkbox",
		...input.attrs,
		checked: input.on
	}, "a", $scope0_id, "input", 1, $scope0_reason, 0)}>${_el_mark($scope0_id, "a")}<input${_attrs(input.attrs, "b", $scope0_id, "input", 1, $scope0_reason, 1)}>${_el_mark($scope0_id, "b")}<p id=out>-</p><button>interactive</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_patch_render($scope0_id, "a3", [$fg__input_attrs && "f", $fg__input_on && "g"], $scope0_reason, 0);
	_scope($scope0_id, {
		f: ($ui__input_on || $ui__input_attrs__OR__input_on) && input.attrs,
		g: ($ui__input_attrs || $ui__input_attrs__OR__input_on) && input.on
	}) || ($fg__input_attrs && $ui__input_on && _patch_write($scope0_id, "xf", input.attrs, !_server_guard($scope0_reason, 1)), $fg__input_on && $ui__input_attrs && _patch_write($scope0_id, "xg", input.on, !_server_guard($scope0_reason, 2)));
}, 1);
