// template.marko
_shells({ a: "a !a0;E ;<main><h1> </h1></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_patch_text($scope0_id, "a", $global$1.brand)}</h1></main>`);
	_script($scope0_id, "a0");
	_patch_effect($scope0_id, "a0", "b");
	$scope0_reason ? _scope($scope0_id, { b: $global$1?.brand }) : _patch_write($scope0_id, "b", $global$1?.brand);
}, 1, 1);
