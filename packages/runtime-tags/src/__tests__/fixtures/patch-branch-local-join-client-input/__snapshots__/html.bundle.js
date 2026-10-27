// tags/child.marko
const $template = "<!><!><div></div>";
const $walks = "b%b b";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%b ;<!><!><div></div>",
	b2: "b2;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 3), $scope0_page = _page_render(), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const c = input.b + "!";
			_html(`<p>${_patch_text($scope1_id, "a", input.a + c, void 0, $scope0_reason, 0)}</p>`);
			$cg__input_a && _patch_write($scope1_id, "xb", c, !(_filled_guard($scope0_reason, 2) && $cg__input_a));
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b0");
			_patch_join_init($scope1_id, "b1", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && ">g", _filled_guard($scope0_reason, 2) && "b");
			$scope0_page && _scope($scope1_id, {
				b: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && c,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["b2"], $scope0_reason, 1);
	_html(`<div></div>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b3");
	_filled_guard($scope0_reason, 3) && _patch_effect($scope0_id, $cg__input_a ? "hb3" : "eb3", "g");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.b,
		g: input.a
	}) : (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vb4", input.b, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && ($cg__input_show ? _patch_fill($scope0_id, "vb5", input.a) : _patch_write($scope0_id, "xg", input.a, !_server_guard($scope0_reason, 3))));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(134 | (_mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5));
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 3) << 7);
	const $childScope2 = _patch_child($scope0_id, "b", 1);
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
