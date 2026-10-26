// template.marko
_shells({ a: "a !a2;b%b ;<!><!><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	let s = 1;
	const foo = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "a", input.x, void 0, $scope0_reason, 0)}</em>`);
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) };
	if ($scope0_page) _if(() => {
		{
			const $scope2_id = _scope_id();
			foo.content({});
			$scope0_page && _scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		e: input.x,
		f: s,
		g: _write_if($scope0_reason, 0) && $input_x__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.x, !_server_guard($scope0_reason, 0));
}, 1);
