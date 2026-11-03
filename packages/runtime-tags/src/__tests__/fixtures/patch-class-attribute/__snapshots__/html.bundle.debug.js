// template.marko
const $template = "<div><p>content</p><span class=base>badge</span></div>";
const $walks = " D b l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko; D b ;<div><p>content</p><span class=base>badge</span></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.theme, $scope0_id, "PatchAttr:#div/0 class", $scope0_reason, 0)}><p${_attr_style(input.accent, $scope0_id, "PatchAttr:#p/1 style", $scope0_reason, 1)}>content</p>${_el_resume($scope0_id, "#p/1", _mask_group($scope0_reason, 1))}<span${_attr_class({
		base: true,
		compact: input.on
	}, $scope0_id, "PatchAttr:#span/2 class", $scope0_reason, 2)}${_attr_style([input.accent, { margin: 0 }], $scope0_id, "PatchAttr:#span/2 style", $scope0_reason, 1)}>badge</span>${_el_resume($scope0_id, "#span/2", _mask_group($scope0_reason, 2) || _mask_group($scope0_reason, 1))}</div>${_el_resume($scope0_id, "#div/0", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
