// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_patch_attr_class($scope0_id, "a", input.theme)}><p${_patch_attr_style($scope0_id, "b", input.accent)}>content</p>${_el_resume($scope0_id, "b")}<span${_patch_attr_class($scope0_id, "c", {
		base: true,
		compact: input.on
	})}${_patch_attr_style($scope0_id, "c", [input.accent, { margin: 0 }])}>badge</span>${_el_resume($scope0_id, "c")}</div>${_el_resume($scope0_id, "a")}`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1);
