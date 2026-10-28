// template.marko
function brandOf(g) {
	return g.brand;
}
_shells({ a: "a;E lD lD ;<main><h1> </h1><h2> </h2><p> </p></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const name = brandOf($global$1);
	_html(`<main><h1>${_text_resume($scope0_id, "a", brandOf($global$1), 1, 4, 0)}</h1><h2>${_text_resume($scope0_id, "b", name, 1, 4, 0)}</h2><p>${_text_resume($scope0_id, "c", input.name, 1, $scope0_reason, 0)}</p></main>`);
	_fill_global_subscribe("a0", $scope0_id);
	_scope($scope0_id, {});
}, 1);
