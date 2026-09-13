// child.marko
_shells({ a: "a;D ;<span> </span>" });
var child_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_owned, 0)}</span>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", void 0, 1);
_shells({
	b: "b !b1; D l ;<button class=n> </button><main></main>",
	b0: "b0 b3 b4 b5;b%/&;<!><!><!>"
});
var template_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(6);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "b", $childScope);
			$Child_withLoadAssets({ label: `${input.label}${n}` });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_owned, 0);
	_html(`</main>${_el_resume($scope0_id, "c", $sg__input_show)}`);
	_script($scope0_id, "b1");
	$scope0_reason ? _scope($scope0_id, {
		g: input.label,
		h: n
	}) : _filled_guard($scope0_owned, 1) && _patch_value($scope0_id, "b0", input.label);
}, 1, () => [$Child_withLoadAssets]);
