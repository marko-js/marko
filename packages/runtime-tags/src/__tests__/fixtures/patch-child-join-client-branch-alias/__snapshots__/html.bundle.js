// tags/child.marko
const $template = "<em> </em><!><!>";
const $walks = "D l%c";
_shells({
	b: "b !;D l%;<em> </em><!><!>",
	b0: "b0;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.a, void 0, $scope0_reason, 3)}</em>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_text($scope1_id, "a", input.a + input.b, void 0, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 4), void 0, void 0, void 0, ["b0"], $scope0_reason, 4);
	_patch_write($scope0_id, "we", input.a, 1);
	_patch_write($scope0_id, "wg", input.b, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.a,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b
	}) : (_filled_guard($scope0_reason, 3) && (_client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "vb3", input.a) : _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "vb2", input.a, !_server_guard($scope0_reason, 3))), _filled_guard($scope0_reason, 5) && (_client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "vb5", input.b) : _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "vb4", input.b, !_server_guard($scope0_reason, 5))));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = "k";
	let s = true;
	_set_scope_reason(2622 | _mask_group($scope0_reason, 1) << 7);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: input.a,
		b: n,
		show: s
	});
	_set_scope_reason(614 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 2) << 11));
	const $childScope2 = _patch_child($scope0_id, "b");
	child_default({
		a: input.a,
		b: input.b,
		show: s
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=s>s</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", n, 1);
	_patch_value($scope0_id, "va2", s, 1);
	$scope0_page && _scope($scope0_id, {
		i: n,
		j: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
