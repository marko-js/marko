// tags/card/index.marko
_shells({ b: "b;D lD ;<h3> </h3><p> </p>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<h3>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h3><p>${_patch_text($scope0_id, "b", input.body, void 0, $scope0_owned, 1)}</p>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.title,
		f: input.body,
		g: show
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.title), _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "a1", input.body));
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
