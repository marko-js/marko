// tags/child.marko
const $template = "<!><!><p> </p><button class=t>t</button>";
const $walks = "b%bD l b";
_shells({ b: "b !b0;b%bD l ;<!><!><p> </p><button class=t>t</button>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<i>${_text_resume($scope1_id, "a", input.a, $wg__input_a)}</i>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	const x = input.a + input.c;
	_html(`<p>${_patch_text($scope0_id, "b", x, void 0, $scope0_reason, 0)}</p><button class=t>t</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_patch_write($scope0_id, "wg", input.c, !(_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1)));
	_patch_join_init($scope0_id, "b2", $scope0_reason, 0);
	_patch_value($scope0_id, "vb3", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.a,
		g: _write_if($scope0_reason, 1) && input.c,
		i: open
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb1", input.a, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = "k";
	_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: input.a,
		c: n
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _patch_child($scope0_id, "b");
	child_default({
		a: input.a,
		c: input.c
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", n, 1);
	$scope0_page && _scope($scope0_id, {
		h: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
