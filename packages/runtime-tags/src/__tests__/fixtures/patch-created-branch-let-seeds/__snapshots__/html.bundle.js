// tags/view.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b4: "b4 b8!b0;D l ;<span> </span><button>+</button>"
});
var view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let a = input.x;
			let b = input.y;
			_html(`<span>${_text_resume($scope1_id, "a", a + b)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b0");
			_filled_guard($scope0_reason, 3) && _patch_write($scope1_id, "wd", b, 1);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b1");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "b2");
			_filled_guard($scope0_reason, 2) && _patch_fill($scope1_id, "vb3", a, 1);
			$scope0_page && _scope($scope1_id, {
				c: a,
				d: b,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b4"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.x,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.y
	}) : (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vb5", input.x, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "vb6", input.y, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7);
	const $childScope = _patch_child($scope0_id, "a");
	view_default({
		show: input.show,
		x: input.x,
		y: input.y
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
