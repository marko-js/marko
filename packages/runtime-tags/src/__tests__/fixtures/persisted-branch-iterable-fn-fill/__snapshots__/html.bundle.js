// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const getTitle = _resume(() => input.title, "a0", $scope0_id);
	const api = {
		label: input.title,
		[Symbol.iterator]: _resume(function* () {
			yield getTitle;
		}, "a1", $scope0_id)
	};
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>show</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.title,
		f: getTitle,
		g: api,
		h: api.label
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", api), _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a1", api.label), _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "e", input.title), _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "f", getTitle));
	_resume_branch($scope0_id);
}, 1, 0);
