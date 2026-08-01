// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attr($scope0_id, "#a/0", "href", input.href)}${_attr("href", input.href)}${_patch_attr($scope0_id, "#a/0", "title", input.title)}${_attr("title", input.title)}${_patch_attr($scope0_id, "#a/0", "hidden", input.hidden)}${_attr("hidden", input.hidden)}>${_patch_text($scope0_id, "#text/1", input.label)}${_escape(input.label)}${_el_resume($scope0_id, "#text/1")}</a>${_el_resume($scope0_id, "#a/0")}`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
