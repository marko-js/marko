// template.marko
_shells({ a: "a !a0;E l%b ;<main><div> </div><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const { known, ...rest } = input;
	_html(`<main><div>${_patch_text($scope0_id, "a", known, void 0, $scope0_owned, 0)}</div>`);
	if ($scope0_reason) _if(() => {}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		f: count,
		h: rest
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", rest);
	_resume_branch($scope0_id);
}, 1, 0);
