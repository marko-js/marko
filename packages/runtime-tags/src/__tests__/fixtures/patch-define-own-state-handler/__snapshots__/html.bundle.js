// template.marko
const $Row_content__walks = " D l";
const $Row_content__template = "<button> </button>";
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0 !a1;${_w0};${_w1}`)($Row_content__walks, $Row_content__template),
	a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Row = { content: _content_elide("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		let shown = "none";
		_html(`<button>${_text_resume($scope1_id, "b", shown)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_patch_value($scope1_id, "va2", shown, 1);
		$scope1_page ? _scope($scope1_id, { e: label }) : _filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "we", label, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	Row.content({ label: input.label });
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
