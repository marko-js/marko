// template.marko
_renderer_shells({ a0: ",`a0;D%c%;<p><!> <!></p>`" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	_for_of(["a", "b"], (name) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "a", name)}${_el_resume($scope1_id, "a")} <!>${_patch_text($scope1_id, "b", input.note, $scope0_owned, 1)}${_el_resume($scope1_id, "b")}</p>`);
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "b", 1, _source_guard($scope0_reason, 1), 0, void 0, void 0, "a0");
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 0);
