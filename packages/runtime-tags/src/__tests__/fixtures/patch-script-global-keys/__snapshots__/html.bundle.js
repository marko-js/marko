// template.marko
_shells({ a: "a !a1;E ;<main><h1> </h1></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_text_mark($scope0_id, "a", $global$1.other, 1, 4, 0)}</h1></main>`);
	_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
