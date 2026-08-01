// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div><h1${_patch_attr($scope0_id, "a", "title", $global().locale)}${_attr("title", $global().locale)}>${_patch_text($scope0_id, "b", $global().brand)}${_escape($global().brand)}${_el_resume($scope0_id, "b")}</h1>${_el_resume($scope0_id, "a")}<p>${_patch_text($scope0_id, "c", input.name)}${_escape(input.name)}${_el_resume($scope0_id, "c")}</p></div>`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1);
