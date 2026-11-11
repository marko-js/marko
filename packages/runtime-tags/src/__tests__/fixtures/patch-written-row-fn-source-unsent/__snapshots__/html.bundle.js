// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { c: n });
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	a: `a${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&`)($walks)};${((_w0) => `<!><!>${_w0}`)($template)}`,
	a3: "a3;b%;<!><!><!>",
	a2: "a2;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items__OR__input_a = _server_guard($scope0_reason, 0), $wg__input_x = _write_guard($scope0_reason, 4), $cg__input_x = _client_guard($scope0_reason, 4), $ui__input_items = _unfilled_if($scope0_reason, 2), $fg__input_a = _filled_guard($scope0_reason, 3), $fg__input_x = _filled_guard($scope0_reason, 4), $cg__input_items = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $ui__input_x = _unfilled_if($scope0_reason, 4), $fg__input_items__OR__input_a = _filled_guard($scope0_reason, 0), $ui__input_items__OR__input_a = _unfilled_if($scope0_reason, 0), $fg__input_items = _filled_guard($scope0_reason, 2);
		$fg__input_items && _unfilled_if($scope0_reason, 3) && _patch_write($scope1_id, "xc", item, !_server_guard($scope0_reason, 2));
		const v = input.a + item;
		$fg__input_items__OR__input_a && $ui__input_x && _patch_write($scope1_id, "xe", v, !$sg__input_items__OR__input_a);
		const g = _bind_resume(function() {
			return v;
		}, "a0", $scope1_id);
		$fg__input_items__OR__input_a && $ui__input_x && _patch_write($scope1_id, "xf", g, !$sg__input_items__OR__input_a);
		_if(() => {
			if (input.x) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", g(), 1, $scope0_reason, 0)}</em>`);
				_client_guard($scope0_reason, 0) && _patch_render($scope2_id, "a1");
				_scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_x, 1, 0, 0, ["a2"], $scope0_reason, 4);
		$fg__input_items__OR__input_a && $cg__input_x && _patch_render($scope1_id, "a1", "f e");
		$cg__input_x && _patch_render($scope1_id, "a4");
		_patch_render($scope1_id, "a5", ((_filled_guard($scope0_reason, 3) ? " >f" : "") + ($fg__input_items ? " c" : "")).slice(1), $scope0_reason, 0);
		_write_if($scope0_reason, 1) && _scope($scope1_id, {
			c: $ui__input_items__OR__input_a && item,
			e: ($ui__input_x || $ui__input_items__OR__input_a) && v,
			f: ($ui__input_x || $ui__input_items__OR__input_a) && g,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a3", $scope0_reason, 2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	counter_default({});
	_patch_child_end();
	$fg__input_a && $cg__input_items && _patch_render($scope0_id, "a6", "f");
	$fg__input_x && $cg__input_items && _patch_render($scope0_id, "a4", "g");
	_scope($scope0_id, {
		f: _unfilled_if($scope0_reason, 0) && input.a,
		g: ($ui__input_items || _unfilled_if($scope0_reason, 4)) && input.x,
		b: _existing_scope($childScope)
	}) || ($fg__input_a && $ui__input_items && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 3)), $fg__input_x && $ui__input_items && _patch_write($scope0_id, "xg", input.x, !_server_guard($scope0_reason, 4)));
}, 1);
