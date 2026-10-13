// template.marko
_shells({
	a0: "a0;D%b%;<em><!><!></em>",
	a: "a !a1;D%b ;<main><!><button>t</button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	const badge = { content: _content_elide("a0", (a, b) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<em>${_patch_text($scope2_id, "a", a, void 0, $scope2_reason, 0)}${_patch_text($scope2_id, "b", b, 2, $scope2_reason, 1)}</em>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			badge.content(...input.parts);
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "va3", show, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.parts,
		f: show
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", input.parts);
}, 1);
