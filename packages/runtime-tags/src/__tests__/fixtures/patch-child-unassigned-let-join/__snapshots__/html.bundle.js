// tags/outer.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b !;D ;<p> </p>" });
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_b = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let x = input.a;
	_html(`<p>${_text_mark($scope0_id, "a", x + input.b)}</p>`);
	_patch_render($scope0_id, "b0", $fg__input_b && "e");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", x, 1);
	_scope($scope0_id, {
		e: input.b,
		f: _write_if($scope0_reason, 1) && x
	}) || $fg__input_b && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({
		a: input.a,
		b: input.b
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
