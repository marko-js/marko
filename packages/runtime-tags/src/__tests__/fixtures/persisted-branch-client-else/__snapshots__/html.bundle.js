// template.marko
_shells({ a: "a !a0;E l%b ;<main><h2> </h2><!><button>toggle</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let on = false;
	const label = input.no + "!";
	_html(`<main><h2>${_patch_text($scope0_id, "a", input.yes, $scope0_owned, 1)}${_el_resume($scope0_id, "a")}</h2>`);
	if ($scope0_reason) _if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<i>${_escape(label)}${_el_resume($scope2_id, "a")}</i>`);
			writeScope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		g: input.yes,
		h: on,
		i: label
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.yes), _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a1", label));
	_resume_branch($scope0_id);
}, 1, 0);
