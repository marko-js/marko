// template.marko
_shells({ a: "a; D b ;<div><p>content</p><span class=base>badge</span></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_accent = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.theme, $scope0_id, "a", $scope0_reason, 0)}><p${_attr_style(input.accent, $scope0_id, "b", $scope0_reason, 1)}>content</p>${_el_mark($scope0_id, "b", $uf__input_accent)}<span${_attr_class({
		base: true,
		compact: input.on
	}, $scope0_id, "c", $scope0_reason, 2)}${_attr_style([input.accent, { margin: 0 }], $scope0_id, "c", $scope0_reason, 1)}>badge</span>${_el_mark($scope0_id, "c", _updates_from($scope0_reason, 2) || $uf__input_accent)}</div>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 0))}`);
	_scope($scope0_id, {});
}, 1);
