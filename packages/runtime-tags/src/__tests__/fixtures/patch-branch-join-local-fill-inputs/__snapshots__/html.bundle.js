// tags/child.marko
const $template = "<!><!><div></div>";
const $walks = "b%b b";
_shells({
	b: "b !;b%b ;<!><!><div></div>",
	b0: "b0 !b5;D lD l ;<p> </p><em> </em><button class=m>m</button>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let m = 0;
			const x = input.a + "!";
			_filled_guard($scope0_reason, 3) ? _patch_value($scope1_id, "vb1", x) : _patch_init($scope1_id, "b2");
			const y = input.b + "?";
			_filled_guard($scope0_reason, 4) ? _patch_value($scope1_id, "vb3", y) : _patch_init($scope1_id, "b4");
			_html(`<p>${_text_resume($scope1_id, "a", x + y + m)}</p><em>${_patch_text($scope1_id, "b", input.a + input.b, void 0, $scope0_reason, 1)}</em><button class=m>m</button>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "b5");
			_patch_join_init($scope1_id, "b6", $scope0_reason, 1);
			_patch_value($scope1_id, "vb7", m, 1);
			_scope($scope1_id, {
				e: m,
				f: x,
				g: y,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["b0"], $scope0_reason, 2);
	_html(`<div></div>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b8", 1, 1);
	_server_guard($scope0_reason, 3) && _patch_effect($scope0_id, "eb8", "f");
	$scope0_page ? _scope($scope0_id, {
		f: input.a,
		g: _write_if($scope0_reason, 0) && input.b
	}) : (_filled_guard($scope0_reason, 3) && (_client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "vb10", input.a) : _client_guard($scope0_reason, 2) || _client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "vb9", input.a, !_server_guard($scope0_reason, 3)) : _patch_write($scope0_id, "wf", input.a, !_server_guard($scope0_reason, 3))), _filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "vb12", input.b) : (_client_guard($scope0_reason, 2) || _client_guard($scope0_reason, 3)) && _patch_value($scope0_id, "vb11", input.b, !_server_guard($scope0_reason, 4))));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
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
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 3) << 5 | _mask_group($scope0_reason, 4) << 7 | _mask_group($scope0_reason, 2) << 9);
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
