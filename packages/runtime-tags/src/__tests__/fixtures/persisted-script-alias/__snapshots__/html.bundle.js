// template.marko
_shells({ a: "a !a0;D ;<h1> </h1>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const copy = input.value;
	_html(`<h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 1)}</h1>`);
	_script($scope0_id, "a0");
	_patch_effect($scope0_id, "a0", "f");
	$scope0_reason ? _scope($scope0_id, { f: copy }) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "f", copy);
}, 1, 0);
