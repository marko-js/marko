// tags/label-view.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_flag__OR__input_a = _unfilled_if($scope0_reason, 0), $ui__input_a = _unfilled_if($scope0_reason, 2), $ui__input_flag = _unfilled_if($scope0_reason, 1), $fg__input_flag = _filled_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : null;
	_html(`<p>${_text_mark($scope0_id, "a", get && get(), 1, $scope0_reason, 0)}</p>`);
	_patch_render($scope0_id, "b0", [$fg__input_flag && "d", $fg__input_a && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_a || $ui__input_flag__OR__input_a) && input.flag,
		e: ($ui__input_flag || $ui__input_flag__OR__input_a) && input.a
	}) || ($fg__input_flag && $ui__input_a && _patch_write($scope0_id, "xd", input.flag, !_server_guard($scope0_reason, 1)), $fg__input_a && $ui__input_flag && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const up = () => "U" + input.title;
	_set_scope_reason($uf__input_title << 1 | $uf__input_title << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_view_default({
		a: up,
		flag: true
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
