// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1><button>Click</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 0);
