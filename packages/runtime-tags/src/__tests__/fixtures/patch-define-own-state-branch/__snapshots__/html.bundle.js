// template.marko
const $Panel_content__walks = "b%b b";
const $Panel_content__template = "<!><!><button>toggle</button>";
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Panel = { content: _content("a0", ({ label }) => {
		const $scope1_id = _scope_id(), $scope1_reason = _scope_reason();
		_write_guard($scope1_reason, 0);
		let open = false;
		if ($scope0_page) _if(() => {}, $scope1_id, "a", 1, 1, 0, 0, 1);
		_html(`<button>toggle</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "a1");
		_patch_fill($scope1_id, "va3", open, 1);
		_scope($scope1_id, {
			e: label,
			f: open
		}) || _filled_guard($scope1_reason, 0) && _patch_fill($scope1_id, "va2", label, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	Panel.content({ label: input.label });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
