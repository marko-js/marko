// template.marko
_shells({ a: "a; ;<style></style><div class=box>Hi</div>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_a0:${_patch_style($scope0_id, "a", "--M_a0", input.color, $scope0_owned, 0)};`)}${_el_resume($scope0_id, "a")}<div class=box>Hi</div>`);
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
