// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	_source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const label = "t:" + input.title;
	const show = input.title !== "hide";
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		f: open,
		g: label,
		h: show,
		i: $label__closures
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", label), _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a1", show));
	_resume_branch($scope0_id);
}, 1, 0);
