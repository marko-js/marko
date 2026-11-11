// tags/child.marko
const $template = "<p> </p><div></div>";
const $walks = "D l b";
const $setup$1 = [[], []];
_shells({ b: "b;D l ;<p> </p><div></div>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.a + input.b, 1, $scope0_reason, 0)}</p><div></div>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b0", 1, $fg__input_a);
	_patch_render($scope0_id, "b1", (($fg__input_a ? " e" : "") + ($fg__input_b ? " f" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.a,
		f: _unfilled_if($scope0_reason, 0) && input.b
	}) || ($fg__input_a && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 1)), $fg__input_b && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>+</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: n,
		a: _existing_scope($childScope)
	});
}, 1);
