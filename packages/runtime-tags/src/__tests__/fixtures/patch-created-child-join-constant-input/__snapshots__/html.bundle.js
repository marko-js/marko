// tags/child.marko
const $template = "<p> </p>";
const $setup = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0), $ui__input_b = _unfilled_if($scope0_reason, 2), $ui__input_a = _unfilled_if($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.a + input.b, 1, $scope0_reason, 0)}</p>`);
	_patch_render($scope0_id, "b0", (($fg__input_a ? " d" : "") + ($fg__input_b ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_b || $ui__input_a__OR__input_b) && input.a,
		e: ($ui__input_a || $ui__input_a__OR__input_b) && input.b
	}) || ($fg__input_a && $ui__input_b && _patch_write($scope0_id, "xd", input.a, !_server_guard($scope0_reason, 1)), $fg__input_b && $ui__input_a && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({
	a: "a !a2;b%b ;<!><!><button class=n>+</button>",
	a1: `a1${_shell_marker([["a4"], []], ["a>", $setup], ["b>", $setup])};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l")};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template, $template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_y = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(34);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({
				a: "x",
				b: n
			});
			_patch_child_end();
			_set_scope_reason(38 | _updates_from($scope0_reason, 1) << 3);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			child_default({
				a: input.y,
				b: n
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	$fg__input_y && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "f");
	_scope($scope0_id, {
		f: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.y,
		g: n
	}) || $fg__input_y && $ui__input_show && _patch_write($scope0_id, "xf", input.y, !_server_guard($scope0_reason, 1));
}, 1);
