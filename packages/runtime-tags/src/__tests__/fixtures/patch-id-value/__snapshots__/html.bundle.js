// template.marko
_shells({ a: "a; D%c%c%;<div><!> <!> <!></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const x = _id("A");
	const z = input.z || _id("B");
	const y = _id("C");
	_html(`<div${_attr("id", z, $scope0_id, "aa$id", $scope0_reason, 0)}>${_text_resume($scope0_id, "b", x, void 0, 0, 0)} ${_text_resume($scope0_id, "c", y, 2, 0, 0)} ${_text_resume($scope0_id, "d", z, 2, $scope0_reason, 0)}</div>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {});
}, 1);
