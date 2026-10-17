// tags/child.marko
const $template = "<!><!><em> </em>";
const $walks = "b%bD l";
_shells({
	b: "b;b%bD ;<!><!><em> </em>",
	b0: "b0;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_text($scope1_id, "a", input.a + input.b, void 0, $scope0_reason, 1)}</p>`);
			_patch_join_init($scope1_id, "b1", $scope0_reason, 1);
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 4), void 0, void 0, void 0, ["b0"], $scope0_reason, 4);
	_html(`<em>${_patch_text($scope0_id, "b", input.a + input.c, void 0, $scope0_reason, 2)}</em>`);
	_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "vb2", input.a) : _patch_write($scope0_id, "wf", input.a, !(_filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 6) || _client_guard($scope0_reason, 7))));
	_filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "vb3", input.b) : _patch_write($scope0_id, "wg", input.b, !(_filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5)));
	_patch_write($scope0_id, "wh", input.c, !(_filled_guard($scope0_reason, 7) && _client_guard($scope0_reason, 5)));
	_patch_join_init($scope0_id, "b4", $scope0_reason, 2);
	$scope0_page && _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b,
		h: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && input.c
	});
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(9118 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 3) << 15));
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: input.a,
		b: n,
		c: input.c,
		show: s
	});
	_set_scope_reason(902 | (_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 2) << 11 | _mask_group($scope0_reason, 4) << 13 | _mask_group($scope0_reason, 3) << 15));
	const $childScope2 = _patch_child($scope0_id, "b");
	child_default({
		a: input.a,
		b: input.b,
		c: input.c,
		show: s
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=s>s</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", n, 1);
	_patch_value($scope0_id, "va2", s, 1);
	$scope0_page && _scope($scope0_id, {
		j: n,
		k: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
