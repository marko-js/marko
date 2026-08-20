// template.marko
_shells({ a: "a !a0;E ;<main><h1> </h1></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", $global().brand)}${_el_resume($scope0_id, "a")}</h1></main>`);
	_script($scope0_id, "a0");
	_patch_effect($scope0_id, "a0", "! brand", 1);
	$scope0_reason && writeScope($scope0_id, {});
}, 1, 1);
