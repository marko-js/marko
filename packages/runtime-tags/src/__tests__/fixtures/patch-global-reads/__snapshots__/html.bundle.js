// template.marko
_shells({ a: "a;D D lD ;<div><h1> </h1><p> </p></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div><h1${_attr("title", $global$1.locale, $scope0_id, "a")}>${_text_resume($scope0_id, "b", $global$1.brand, void 0, 4, 0)}</h1>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "c", input.name, void 0, $scope0_reason, 0)}</p></div>`);
	_fill_global_subscribe("a0", $scope0_id);
	_fill_global_subscribe("a1", $scope0_id);
	_scope($scope0_id, {});
}, 1);
