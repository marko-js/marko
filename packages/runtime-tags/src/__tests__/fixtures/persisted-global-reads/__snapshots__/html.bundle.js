// template.marko
_shells({ a: "a;D D lD ;<div><h1> </h1><p> </p></div>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div><h1${_patch_attr($scope0_id, "a", "title", $global$1.locale)}>${_patch_text($scope0_id, "b", $global$1.brand)}${_el_resume($scope0_id, "b")}</h1>${_el_resume($scope0_id, "a")}<p>${_patch_text($scope0_id, "c", input.name, $scope0_owned, 0)}${_el_resume($scope0_id, "c")}</p></div>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 1);
