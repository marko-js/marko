// tags/label-view.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_flag__OR__input_a__OR__input_b = _unfilled_if($scope0_reason, 3), $fg__input_flag = _filled_guard($scope0_reason, 4), $fg__input_a = _filled_guard($scope0_reason, 5), $fg__input_b = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : input.b;
	_html(`<p>${_text_mark($scope0_id, "a", get(), 1, $scope0_reason, 3)}</p>`);
	_patch_render($scope0_id, "b0", (($fg__input_flag ? " d" : "") + ($fg__input_a ? " e" : "") + ($fg__input_b ? " f" : "")).slice(1), $scope0_reason, 3);
	_scope($scope0_id, {
		d: $ui__input_flag__OR__input_a__OR__input_b && input.flag,
		e: $ui__input_flag__OR__input_a__OR__input_b && input.a,
		f: $ui__input_flag__OR__input_a__OR__input_b && input.b
	}) || ($fg__input_flag && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.flag, !_server_guard($scope0_reason, 4)), $fg__input_a && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 5)), $fg__input_b && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 6)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.title, !_server_guard($scope0_reason, 0));
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason($uf__input_title << 1 | $uf__input_title << 3 | $uf__input_title << 5 | $uf__input_title << 7 | $uf__input_title << 11 | $uf__input_title << 13);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_view_default({
		a: up,
		b: low,
		flag: true
	});
	_patch_child_end();
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 0) && input.title,
		a: _existing_scope($childScope)
	});
}, 1);
