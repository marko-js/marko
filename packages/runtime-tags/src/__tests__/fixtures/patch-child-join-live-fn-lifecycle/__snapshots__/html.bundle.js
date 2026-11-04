// tags/child.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2), $sg__input_a = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	$fg__input_a && _patch_write($scope0_id, "xd", input.a, !$sg__input_a);
	const fmt = _bind_resume(() => input.a + "!", "b0", $scope0_id);
	_html(`<p>${_text_mark($scope0_id, "a", fmt() + input.b, 1, $scope0_reason, 0)}</p>`);
	_script($scope0_id, "b1", 1, ($fg__input_a || $fg__input_b) && (_client_guard($scope0_reason, 2) || _client_guard($scope0_reason, 1) ? 2 : 1), (($fg__input_b ? " e" : "") + ($fg__input_a ? " f" : "") + ($fg__input_a ? " d" : "")).slice(1), "b2", $scope0_reason, 0);
	_scope($scope0_id, {
		d: input.a,
		e: input.b,
		f: fmt
	}) || ($fg__input_b && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 2)), $fg__input_a && _patch_write($scope0_id, "xf", fmt, !$sg__input_a));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b`)("D l", "D l")};${((_w0, _w1) => `${_w0}${_w1}<button>+</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(38 | $uf__input_a << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | $uf__input_a << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: input.a,
		b: input.b
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
