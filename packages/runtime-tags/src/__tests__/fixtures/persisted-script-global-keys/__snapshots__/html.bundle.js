// template.marko
_shells({ a: "a !a2;E ;<main><h1> </h1></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", $global().other)}</h1></main>`);
	_global_subscribe("a0", $scope0_id);
	_global_subscribe("a1", $scope0_id);
	_script($scope0_id, "a2");
	$scope0_reason && _scope($scope0_id, {});
}, 1, 1);
