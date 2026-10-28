// template.marko
_shells({ a: "a; D b ;<div><p>content</p><span class=base>badge</span></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.theme, $scope0_id, "aa$class", $scope0_reason, 0)}><p${_attr_style(input.accent, $scope0_id, "ab$style", $scope0_reason, 1)}>content</p>${_el_resume($scope0_id, "b", _mask_group($scope0_reason, 1))}<span${_attr_class({
		base: true,
		compact: input.on
	}, $scope0_id, "ac$class", $scope0_reason, 2)}${_attr_style([input.accent, { margin: 0 }], $scope0_id, "ac$style", $scope0_reason, 1)}>badge</span>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 2) || _mask_group($scope0_reason, 1))}</div>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {});
}, 1);
