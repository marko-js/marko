// tags/badge/index.marko
_shells({
	b: "b;b%bD ;<!><!><p> </p>",
	b0: "b0,<em>on</em>"
});
var badge_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_open = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_html("<em>on</em>");
			$scope0_reason && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_open, $sg__input_open, void 0, void 0, ["b0"], $scope0_owned, 0);
	_html(`<p>${_patch_text($scope0_id, "b", input.text, void 0, $scope0_owned, 1)}</p>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.a,
		f: input.b,
		g: show
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.a), _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "a1", input.b));
	_resume_branch($scope0_id);
}, 1, () => [badge_default]);
