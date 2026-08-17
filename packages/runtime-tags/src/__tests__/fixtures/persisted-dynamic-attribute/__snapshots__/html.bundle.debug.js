// template.marko
const $template = "<a> </a>";
const $walks = " D l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attr($scope0_id, "#a/0", "href", input.href, $scope0_owned, 0)}${_patch_attr($scope0_id, "#a/0", "title", input.title, $scope0_owned, 1)}${_patch_attr($scope0_id, "#a/0", "hidden", input.hidden, $scope0_owned, 2)}>${_patch_text($scope0_id, "#text/1", input.label, $scope0_owned, 3)}${_el_resume($scope0_id, "#text/1")}</a>${_el_resume($scope0_id, "#a/0")}`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
