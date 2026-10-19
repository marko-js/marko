// tags/child.marko
const $template = "<!><!><!><button class=t>t</button>";
const $walks = "b%b%b b";
_shells({
	b: "b !b3;b%b%b ;<!><!><!><button class=t>t</button>",
	b0: "b0;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "a", input.a + item, void 0, $scope0_reason, 0)}</p>`);
		_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_write($scope1_id, "wc", item);
		(_filled_guard($scope0_reason, 2) && !_client_guard($scope0_reason, 1) || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "b1", $scope0_reason, 0);
		_scope($scope1_id, {
			c: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item,
			_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 1);
	if ($scope0_page) _if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<div></div>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "b2");
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b3");
	_patch_value($scope0_id, "vb6", open, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.a,
		h: open
	}) : _filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_value($scope0_id, "vb5", input.a) : _patch_value($scope0_id, "vb4", input.a, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=l>l</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: input.a,
		items: list
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope2 = _patch_child($scope0_id, "b");
	child_default({
		a: input.a,
		items: input.items
	});
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", list, 1);
	$scope0_page && _scope($scope0_id, {
		h: list,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
