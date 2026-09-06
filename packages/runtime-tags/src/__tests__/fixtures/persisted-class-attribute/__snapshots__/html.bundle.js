// template.marko
_shells({ a: "a; D b ;<div><p>content</p><span class=base>badge</span></div>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_patch_attr_class($scope0_id, "a", input.theme, $scope0_owned, 0)}><p${_patch_attr_style($scope0_id, "b", input.accent, $scope0_owned, 1)}>content</p>${_el_resume($scope0_id, "b")}<span${_patch_attr_class($scope0_id, "c", {
		base: true,
		compact: input.on
	}, $scope0_owned, 2)}${_patch_attr_style($scope0_id, "c", [input.accent, { margin: 0 }], $scope0_owned, 1)}>badge</span>${_el_resume($scope0_id, "c")}</div>${_el_resume($scope0_id, "a")}`);
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
