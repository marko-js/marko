// template.marko
_shells({ a: "a;D D lD ;<div><h1> </h1><p> </p></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div><h1${_attr("title", $global$1.locale, $scope0_id, "a")}>${_text_mark($scope0_id, "b", $global$1.brand, 1, 4, 0)}</h1>${_el_mark($scope0_id, "a")}<p>${_text_mark($scope0_id, "c", input.name, 1, $scope0_reason, 0)}</p></div>`);
	_global_subscribe("a0", $scope0_id);
	_global_subscribe("a1", $scope0_id);
	_scope($scope0_id, {});
}, 1);
