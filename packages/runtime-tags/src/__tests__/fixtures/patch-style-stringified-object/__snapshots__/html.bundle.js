// template.marko
_shells({ a: "a; ;<style></style><div class=box>box</div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_a0:${_patch_style($scope0_id, "ya$--M_a0", input.color, $scope0_reason, 0)};`)}${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<div class=box>box</div>`);
	_scope($scope0_id, {});
}, 1);
