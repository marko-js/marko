// template.marko
const $template = "<div><p>content</p><span class=base>badge</span></div>";
const $walks = " D b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko; D b ;<div><p>content</p><span class=base>badge</span></div>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div${_patch_attr_class($scope0_id, "#div/0", input.theme, $scope0_reason, 0)}><p${_patch_attr_style($scope0_id, "#p/1", input.accent, $scope0_reason, 1)}>content</p>${_el_resume($scope0_id, "#p/1")}<span${_patch_attr_class($scope0_id, "#span/2", {
		base: true,
		compact: input.on
	}, $scope0_reason, 2)}${_patch_attr_style($scope0_id, "#span/2", [input.accent, { margin: 0 }], $scope0_reason, 1)}>badge</span>${_el_resume($scope0_id, "#span/2")}</div>${_el_resume($scope0_id, "#div/0")}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
