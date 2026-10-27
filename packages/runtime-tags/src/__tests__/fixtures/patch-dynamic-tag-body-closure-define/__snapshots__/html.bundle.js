// template.marko
_shells({
	a0: "a0 !a1; b%;<button id=open>open</button><!><!>",
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Foo = { content: _content_elide("a0", (input) => {
		const $scope1_id = _scope_id(), $scope1_reason = _scope_reason();
		_write_guard($scope1_reason, 0);
		const $scope1_page = _page_render();
		_content_withhold(input?.content), _patch_fill($scope1_id, "va2", input?.content);
		let open = false;
		_html(`<button id=open>open</button>${_el_resume($scope1_id, "a")}`);
		if ($scope0_page) _if(() => {}, $scope1_id, "b");
		_script($scope1_id, "a1");
		_patch_fill($scope1_id, "va3", open, 1);
		$scope1_page && _scope($scope1_id, { e: input?.content });
	}, $scope0_id) };
	let count = 1;
	_dynamic_tag($scope0_id, "a", Foo, {}, _content_resume("a4", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		const $scope3_page = _page_render();
		_html(`count ${_patch_text($scope3_id, "a", count, 2, 0, 0)}`);
		$scope3_page && _scope($scope3_id, {});
	}, $scope0_id, ($scope) => [{ e: count }]), 0, 0, void 0, 2, 0, 0);
}, 1);
