// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const fa = _resume(() => input.a, "a0", $scope0_id);
	const fb = _resume(() => input.b, "a1", $scope0_id);
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason ? _scope($scope0_id, {
		e: input.a,
		f: input.b,
		g: fa,
		h: fb,
		i: open
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", fa), _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "a1", fb), _owned_guard($scope0_owned, 1) && _patch_write($scope0_id, "e", input.a), _owned_guard($scope0_owned, 2) && _patch_write($scope0_id, "f", input.b));
	_resume_branch($scope0_id);
}, 1, 0);
