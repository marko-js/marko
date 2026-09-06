// template.marko
_shells({ a: "a !a1;E ;<main><h1> </h1></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const brand = $global().brand;
	_html(`<main><h1>${_patch_text($scope0_id, "a", brand)}</h1></main>`);
	_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a1");
	_patch_effect($scope0_id, "a1", "b");
	$scope0_reason ? _scope($scope0_id, { b: brand }) : _patch_write($scope0_id, "b", brand);
}, 1, 1);
