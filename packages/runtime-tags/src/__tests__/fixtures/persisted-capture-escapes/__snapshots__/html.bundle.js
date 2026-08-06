// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", `a&b${input.name}<c`)}${_el_resume($scope0_id, "a")}</h1><a${_patch_attr($scope0_id, "b", "title", input.on ? "a\"b" : "c'd")}${_patch_attr($scope0_id, "b", "data-x", input.flag && "on")}>${_patch_text($scope0_id, "c", input.name)}${_el_resume($scope0_id, "c")}</a>${_el_resume($scope0_id, "b")}</main>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1);
