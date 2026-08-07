// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let items = ["a"];
	_html("<main><ul>");
	if ($scope0_reason) _for_of([input.first, ...items], (entry) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(entry)}${_el_resume($scope1_id, "a")}</li>`);
		writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.first,
		f: items
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.first);
	_resume_branch($scope0_id);
}, 1, 0);
