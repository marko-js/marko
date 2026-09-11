// child.marko
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_owned, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a0", count, 1);
	$scope0_reason && _scope($scope0_id, { g: count });
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", void 0, 1);
_shells({ b: "b !b0; b ;<button class=toggle>toggle</button><main></main>" });
var template_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	_source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}<main>`);
	if ($scope0_reason) _if(() => {}, $scope0_id, "b", 1, 1, 1, "</main>");
	_script($scope0_id, "b0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.show,
		f: input.label,
		g: open,
		i: $input_label__closures
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "b0", input.show), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "b1", input.label));
}, 1, () => [$Child_withLoadAssets]);
