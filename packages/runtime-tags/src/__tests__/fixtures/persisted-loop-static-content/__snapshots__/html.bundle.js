// template.marko
_renderer_shells({ a0: ",`a0;Db%;<p>item <!></p>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	forOf(["a", "b"], (name) => {
		const $scope1_id = _scope_id();
		_html(`<p>item <!>${_patch_text($scope1_id, "a", name)}${_el_resume($scope1_id, "a")}</p>`);
		writeScope($scope1_id, {});
	});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 0);
