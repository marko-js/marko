// tags/panel/index.marko
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var panel_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_body = _source_guard($scope0_reason, 2), $sg__input_open = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			const $tag = input.body;
			_patch_dynamic_tag($scope1_id, "a", $tag, 0, 0, 0, 0, $scope0_owned, 2);
			_dynamic_tag($scope1_id, "a", $tag, {}, 0, 0, $sg__input_body, 1);
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_open, $sg__input_open, void 0, void 0, ["b0"], $scope0_owned, 1);
	$scope0_reason ? _scope($scope0_id, { e: input.body }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "b0", input.body);
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const extra = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.title, void 0, $scope0_owned, 0)}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<main>");
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(panel_default)) {
		_set_serialize_reason(10);
		_patch_child($scope0_id, "a", $childScope);
		panel_default({
			body: extra,
			open: true
		});
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason ? _scope($scope0_id, {
		e: input.title,
		f: count,
		h: $input_title__closures,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 0) && _content_withheld("a0") && _patch_value($scope0_id, "a0", input.title);
}, 1, () => [panel_default]);
