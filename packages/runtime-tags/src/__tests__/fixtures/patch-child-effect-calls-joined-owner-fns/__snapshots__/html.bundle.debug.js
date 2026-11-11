// tags/label-view.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label-view.marko": "__tests__/tags/label-view.marko; ;<output></output>" });
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_flag__OR__input_a__OR__input_b = _unfilled_if($scope0_reason, 3), $fg__input_flag__OR__input_a__OR__input_b = _filled_guard($scope0_reason, 3), $fg__input_flag = _filled_guard($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : input.b;
	_html(`<output></output>${_el_mark($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label-view.marko_0_get#7", 1, $fg__input_flag__OR__input_a__OR__input_b);
	_patch_render($scope0_id, "__tests__/tags/label-view.marko_0_input_flag#3_input_a#4_input_b#5/setup", (($fg__input_flag ? " input_flag" : "") + ($fg__input_a ? " input_a" : "") + ($fg__input_b ? " input_b" : "")).slice(1), $scope0_reason, 3);
	_scope($scope0_id, {
		input_flag: _write_if($scope0_reason, 2) && $ui__input_flag__OR__input_a__OR__input_b && input.flag,
		input_a: _write_if($scope0_reason, 1) && $ui__input_flag__OR__input_a__OR__input_b && input.a,
		input_b: _write_if($scope0_reason, 0) && $ui__input_flag__OR__input_a__OR__input_b && input.b,
		get
	}, "__tests__/tags/label-view.marko", 0, {
		input_flag: ["input.flag"],
		input_a: ["input.a"],
		input_b: ["input.b"],
		get: "1:8"
	}) || ($fg__input_flag && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_flag", input.flag, !_server_guard($scope0_reason, 4)), $fg__input_a && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 6)), $fg__input_flag__OR__input_a__OR__input_b && _patch_write($scope0_id, "PatchMarkedWrite:get", get, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${$template$1}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	_set_scope_reason($uf__input_title << 1 | $uf__input_title << 3 | $uf__input_title << 5 | $uf__input_title << 7 | $uf__input_title << 11 | $uf__input_title << 13);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	label_view_default({
		a: up,
		b: low,
		flag: true
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_title: input.title,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_title: ["input.title"] });
}, 1);
