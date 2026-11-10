// tags/row.marko
const $template$1 = "<p> </p><em> </em>";
const $walks$1 = "D lD l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/row.marko": "__tests__/tags/row.marko;D lD ;<p> </p><em> </em>" });
var row_default = _template("__tests__/tags/row.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0), $ui__input_b = _unfilled_if($scope0_reason, 4), $ui__input_b__OR__input_y = _unfilled_if($scope0_reason, 2), $ui__input_a__OR__input_y = _unfilled_if($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 4), $fg__input_y = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.a + input.b, 1, $scope0_reason, 0)}</p><em>${_text_mark($scope0_id, "#text/1", input.y + input.b, 1, $scope0_reason, 2)}</em>`);
	_patch_render($scope0_id, "__tests__/tags/row.marko_0_input_a#4_input_b#5/setup", (($fg__input_a ? " input_a" : "") + ($fg__input_b ? " input_b" : "")).slice(1), $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/tags/row.marko_0_input_b#5_input_y#7/setup", (($fg__input_b ? " input_b" : "") + ($fg__input_y ? " input_y" : "")).slice(1), $scope0_reason, 2);
	_scope($scope0_id, {
		input_a: ($ui__input_b || $ui__input_a__OR__input_b) && input.a,
		input_b: ($ui__input_a__OR__input_y || $ui__input_a__OR__input_b || $ui__input_b__OR__input_y) && input.b,
		input_y: ($ui__input_b || $ui__input_b__OR__input_y) && input.y
	}, "__tests__/tags/row.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		input_y: ["input.y"]
	}) || ($fg__input_a && $ui__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 3)), $fg__input_b && $ui__input_a__OR__input_y && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 4)), $fg__input_y && $ui__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_y", input.y, !_server_guard($scope0_reason, 5)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button>+</button>`)($template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& b`)($walks$1, $walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& b`)($walks$1, $walks$1, $walks$1)};${((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button>+</button>`)($template$1, $template$1, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_y = _updates_from($scope0_reason, 1), $uf__input_x = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(762 | $uf__input_y << 11);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	row_default({
		a: n,
		b: n,
		y: input.y
	});
	_patch_child_end();
	_set_scope_reason(158 | (_updates_from($scope0_reason, 0) << 5 | $uf__input_x << 9 | $uf__input_y << 11));
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	row_default({
		a: n,
		b: input.x,
		y: input.y
	});
	_patch_child_end();
	_set_scope_reason(2286 | $uf__input_x << 9);
	const $childScope3 = _peek_scope_id($scope0_id, "#childScope/2", 2);
	row_default({
		a: n,
		b: input.x,
		y: n
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2),
		"#childScope/2": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
