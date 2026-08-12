// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	_await($scope0_id, "b", new Promise((resolve) => setTimeout(resolve, 10, "slow")), (value) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", value)}${_el_resume($scope1_id, "a")}</em>`);
		writeScope($scope1_id, {});
	});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 0);
