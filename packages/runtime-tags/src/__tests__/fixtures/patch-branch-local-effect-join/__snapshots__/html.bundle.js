// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b3: "b3;D l ;<p> </p><div></div>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 3), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 2), $sg__input_b = _server_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const c = input.b + "!";
			_filled_guard($scope0_reason, 3) && _patch_write($scope1_id, "xc", c, !$sg__input_b);
			_html(`<p>${_patch_text($scope1_id, "a", input.a + c, void 0, $scope0_reason, 1)}</p><div></div>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b0");
			_filled_guard($scope0_reason, 3) && _patch_effect($scope1_id, $cg__input_b ? "hb0" : "eb0", "c");
			$cg__input_b && _patch_init($scope1_id, "b1");
			_patch_join_init($scope1_id, "b2", $scope0_reason, 1, _filled_guard($scope0_reason, 4) && ">f", _filled_guard($scope0_reason, 3) && "c");
			$scope0_page && _scope($scope1_id, {
				c,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b3"], $scope0_reason, 2);
	_filled_guard($scope0_reason, 4) && $cg__input_show ? _patch_fill($scope0_id, "vb5", input.a) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.a, !(_filled_guard($scope0_reason, 4) && $cg__input_b));
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.b,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a
	}) : _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "vb4", input.b, !$sg__input_b);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 4) << 5 | _mask_group($scope0_reason, 3) << 7 | _mask_group($scope0_reason, 2) << 9);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
