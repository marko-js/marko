// tags/label-view.marko
const $template = "<output></output>";
const $setup$1 = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_flag__OR__input_a__OR__input_b = _filled_guard($scope0_reason, 3), $fg__input_flag = _filled_guard($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : input.b;
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, $fg__input_flag__OR__input_a__OR__input_b, "h");
	_patch_render($scope0_id, "b1", [
		$fg__input_flag && "d",
		$fg__input_a && "e",
		$fg__input_b && "f"
	], $scope0_reason, 3);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.flag,
		e: _write_if($scope0_reason, 1) && input.a,
		f: _write_if($scope0_reason, 0) && input.b,
		h: get
	}) || ($fg__input_flag && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.flag, !_server_guard($scope0_reason, 4)), $fg__input_a && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 6)), $fg__input_flag__OR__input_a__OR__input_b && _patch_write($scope0_id, "xh", get, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)(" b")};${((_w0) => `${_w0}<button>more</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0));
	let n = 0;
	const low = _bind_resume(() => "l" + input.title, "a0", $scope0_id);
	_set_scope_reason(482 | (_updates_from($scope0_reason, 0) << 3 | ($scope0_page ? 1 : 0) << 11 | _updates_from($scope0_reason, 0) << 13));
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_view_default({
		a: _resume(() => "x0", "a1", $scope0_id),
		b: low,
		flag: false
	});
	_patch_child_end();
	_html(`<button>more</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.title,
		f: n,
		a: _existing_scope($childScope)
	});
}, 1);
