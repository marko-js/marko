// v:template.marko.css
var v_template_marko_default = "\n  .box {\n    color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19interpolation-1btemplate-1amarko_0);\n  }\n";

// template.marko
const $template = "<style></style><div class=box>Hi</div>";
const $walks = " b";
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<style></style><div class=box>Hi</div>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19interpolation-1btemplate-1amarko_0:${_patch_style($scope0_id, "#style/0", "--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpersisted-19style-19interpolation-1btemplate-1amarko_0", input.color, $scope0_owned, 0)};`)}${_el_resume($scope0_id, "#style/0")}<div class=box>Hi</div>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
