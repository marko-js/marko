// tags/child.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a__OR__input_b = _updates_from($scope0_reason, 0), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_text_mark($scope0_id, "a", input.a + input.b + $global$1.g, 1, (2 | $uf__input_a__OR__input_b) << 1, 0)}</p>`);
	_global_subscribe("b0", $scope0_id, _client_guard((2 | $uf__input_a__OR__input_b) << 1, 0));
	_patch_render($scope0_id, "b1", (($fg__input_a ? " d" : "") + ($fg__input_b ? " e" : "")).slice(1), (2 | $uf__input_a__OR__input_b) << 1, 0);
	_scope($scope0_id, {
		d: $ui__input_a__OR__input_b && input.a,
		e: $ui__input_a__OR__input_b && input.b
	}) || ($fg__input_a && $ui__input_a__OR__input_b && _patch_write($scope0_id, "xd", input.a, !_server_guard($scope0_reason, 1)), $fg__input_b && $ui__input_a__OR__input_b && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b`)("D l", "D l")};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		a: input.x,
		b: "n0"
	});
	_patch_child_end();
	_set_scope_reason(14 | _updates_from($scope0_reason, 1) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		a: "m0",
		b: input.y
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
