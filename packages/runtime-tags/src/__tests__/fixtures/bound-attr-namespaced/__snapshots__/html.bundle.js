// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_href__OR__input_hrefChange = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<svg><use${_attr("xlink:href", input.href)}${_attr("xlink:hrefChange", input.hrefChange)}></use>${_el_resume($scope0_id, "a", $sg__input_href__OR__input_hrefChange)}</svg>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { e: _serialize_if($scope0_reason, 1) && input.hrefChange });
}, 1);
