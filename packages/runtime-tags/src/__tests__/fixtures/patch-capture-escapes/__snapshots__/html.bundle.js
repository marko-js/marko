// template.marko
_shells({ a: "a;E l D ;<main><h1> </h1><a> </a></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "a", `a&b${input.name}<c`, void 0, $scope0_reason, 0)}</h1><a${_attr("title", input.on ? "a\"b" : "c'd", $scope0_id, "b", $scope0_reason, 1)}${_attr("data-x", input.flag && "on", $scope0_id, "b", $scope0_reason, 2)}>${_text_resume($scope0_id, "c", input.name, void 0, $scope0_reason, 0)}</a>${_el_resume($scope0_id, "b", _mask_group($scope0_reason, 1) || _mask_group($scope0_reason, 2))}</main>`);
	_scope($scope0_id, {});
}, 1);
