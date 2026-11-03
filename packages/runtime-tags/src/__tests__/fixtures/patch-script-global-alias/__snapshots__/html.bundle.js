// template.marko
_shells({ a: "a;E ;<main><h1> </h1></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const brand = $global().brand;
	_html(`<main><h1>${_text_resume($scope0_id, "a", brand, 1, 4, 0)}</h1></main>`);
	_fill_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a1", 1, 1, "b");
	_scope($scope0_id, { b: brand }) || _patch_write($scope0_id, "xb", brand);
}, 1);
