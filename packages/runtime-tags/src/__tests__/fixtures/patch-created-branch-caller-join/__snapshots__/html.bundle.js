// tags/panel.marko
const $template = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0;D ;<em> </em>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.a + ":" + input.b, void 0, $scope0_reason, 2)}</em>`);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 4);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.b
	}) : (_filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "vb3", input.a) : _client_guard($scope0_reason, 6) && _patch_value($scope0_id, "vb2", input.a, !_server_guard($scope0_reason, 5))), _filled_guard($scope0_reason, 6) && (_client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "vb5", input.b) : _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "vb4", input.b, !_server_guard($scope0_reason, 6))));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(2534 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 13));
	const $childScope = _patch_child($scope0_id, "a");
	panel_default({
		a: count,
		b: input.x,
		show: input.show
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", count, 1);
	$scope0_page && _scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	});
}, 1);
