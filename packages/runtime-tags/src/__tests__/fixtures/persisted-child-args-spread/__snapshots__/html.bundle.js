// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	const badge = { content: _content("a0", (a, b) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope2_id, "a", a)}${_patch_text($scope2_id, "b", b, 2)}</em>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			badge.content(...input.parts);
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		e: input.parts,
		f: show
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.parts);
}, 1, 1);
