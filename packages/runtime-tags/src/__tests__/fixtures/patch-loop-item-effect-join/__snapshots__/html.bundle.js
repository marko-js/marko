// tags/child.marko
const $template = "<!><!><!>";
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0;D l ;<p> </p><div></div>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "wd", item, !_server_guard($scope0_reason, 1));
		_html(`<p>${_patch_text($scope1_id, "a", input.a + item, void 0, $scope0_reason, 0)}</p><div></div>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "b1", 1, _client_guard($scope0_reason, 1));
		_server_guard($scope0_reason, 1) && _patch_effect($scope1_id, "eb1", "d");
		(_filled_guard($scope0_reason, 2) && !_client_guard($scope0_reason, 1) || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "b2", $scope0_reason, 0);
		_scope($scope1_id, {
			d: item,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) ? _patch_value($scope0_id, "vb3", input.a) : _patch_write($scope0_id, "we", input.a, 1);
	$scope0_page && _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a });
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: input.y,
		items: input.items
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
