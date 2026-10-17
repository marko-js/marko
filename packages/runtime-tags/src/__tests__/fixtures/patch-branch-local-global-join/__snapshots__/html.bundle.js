// tags/child.marko
const $template = "<!><!><!>";
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const c = $global$1.g + "!";
			_html(`<p>${_patch_text($scope1_id, "a", input.a + input.b + c, void 0, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
			_fill_global_subscribe("b1", $scope1_id);
			_patch_write($scope1_id, "wb", c, 1);
			_patch_join_init($scope1_id, "b2", (2 | _mask_group($scope0_reason, 0)) << 1, 0);
			_scope($scope1_id, {
				b: _unfilled_if($scope0_reason, 0) && c,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 2);
	_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "vb3", input.a) : _patch_write($scope0_id, "we", input.a, !(_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 4)));
	_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "vb4", input.b) : _patch_write($scope0_id, "wf", input.b, !(_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3)));
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b
	});
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c")};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(158 | (_mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 2) << 9));
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 4) << 7 | _mask_group($scope0_reason, 2) << 9);
	const $childScope2 = _patch_child($scope0_id, "b");
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", n, 1);
	$scope0_page && _scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
