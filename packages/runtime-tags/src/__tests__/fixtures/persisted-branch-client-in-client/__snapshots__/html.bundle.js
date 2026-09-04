// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	let count = 0;
	let on = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.outer,
		f: input.inner,
		g: count,
		h: on,
		j: $input_inner__closures
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.outer), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a1", input.inner));
}, 1, 0);
