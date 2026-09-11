// components/child.marko
_shells({ b: "b !b0; D%c%;<button><!>:<!></button>" });
var child_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_owned, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", count, 1);
	$scope0_reason && _scope($scope0_id, { g: count });
}, 0, 0);

// components/wrapper.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_b", void 0, 1);
_shells({
	c: "c !; ;<section></section>",
	c0: "c0 c2;b%/&;<!><!><!>"
});
var wrapper_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "b", $childScope);
			$Child_withLoadAssets({ label: input.label });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["c0"], $scope0_owned, 1);
	_html(`</section>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason ? _scope($scope0_id, { e: input.label }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "c0", input.label);
}, 0, () => [$Child_withLoadAssets]);

// template.marko
_shells({ a: "a !a0; ;<main></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a", 1, 1, 1, "</main>");
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		d: input.show,
		e: input.label
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.show), _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "a1", input.label));
}, 1, () => [wrapper_default]);
