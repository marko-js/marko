// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !a1;b%b ;<!><!><button>+</button>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	let s = 1;
	const foo = { content: _content_elide("a0", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.x, void 0, $scope0_owned, 0)}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	if ($scope0_reason) _if(() => {
		{
			const $scope2_id = _scope_id();
			const $childScope = _peek_scope_id();
			foo.content({});
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	$scope0_reason ? _scope($scope0_id, {
		f: s,
		g: $input_x__closures
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.x);
}, 1, 1);
