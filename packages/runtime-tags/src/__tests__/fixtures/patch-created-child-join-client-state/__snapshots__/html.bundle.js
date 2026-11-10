// tags/plain-child.marko
const $template = "<p>t=<!></p>";
const $walks = "Db%l";
const $setup = [[], []];
_shells({ b: "b;Db%;<p>t=<!></p>" });
var plain_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_a__OR__input_b = _unfilled_if($scope0_reason, 0), $ui__input_b = _unfilled_if($scope0_reason, 2), $ui__input_a = _unfilled_if($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<p>t=${_text_mark($scope0_id, "a", input.a + input.b, 2, $scope0_reason, 0)}</p>`);
	_patch_render($scope0_id, "b0", (($fg__input_a ? " d" : "") + ($fg__input_b ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: ($ui__input_b || $ui__input_a__OR__input_b) && input.a,
		e: ($ui__input_a || $ui__input_a__OR__input_b) && input.b
	}) || ($fg__input_a && $ui__input_b && _patch_write($scope0_id, "xd", input.a, !_server_guard($scope0_reason, 1)), $fg__input_b && $ui__input_a && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({
	a: "a !a2; b%;<button>+</button><!><!>",
	a1: `a1${_shell_marker([["a4"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_x = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let tab = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _updates_from($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			plain_child_default({
				a: tab,
				b: input.x
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_script($scope0_id, "a2");
	$fg__input_x && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "f");
	_scope($scope0_id, {
		f: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.x,
		g: tab
	}) || $fg__input_x && $ui__input_show && _patch_write($scope0_id, "xf", input.x, !_server_guard($scope0_reason, 1));
}, 1);
