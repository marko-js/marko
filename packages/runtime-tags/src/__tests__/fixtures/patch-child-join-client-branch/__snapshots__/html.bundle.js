// tags/panel.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b1: "b1;D ;<p> </p>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_text($scope1_id, "a", input.a + ":" + input.b, void 0, $scope0_reason, 2)}</p>`);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b0");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b1"], $scope0_reason, 4);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.b
	}) : (_filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "vb3", input.a) : _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "vb2", input.a, !_server_guard($scope0_reason, 5))), _filled_guard($scope0_reason, 6) && ($cg__input_show ? _patch_fill($scope0_id, "vb5", input.b) : _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "vb4", input.b, !_server_guard($scope0_reason, 6))));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=c>+</button><button class=s>s</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	let s = false;
	_set_scope_reason(3066 | _mask_group($scope0_reason, 1) << 13);
	const $childScope = _patch_child($scope0_id, "a");
	panel_default({
		a: count,
		b: input.x,
		show: s
	});
	_set_scope_reason(926 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 1) << 13));
	const $childScope2 = _patch_child($scope0_id, "b");
	panel_default({
		a: input.y,
		b: input.x,
		show: s
	});
	_html(`<button class=c>+</button>${_el_resume($scope0_id, "c")}<button class=s>s</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		i: count,
		j: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
