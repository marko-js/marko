// template.marko
_shells({ a: "a !a1 a2;E lD lD lD lD lD lD lD lD lD lD lD lD lD ;<main><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><h1> </h1></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><p>${_patch_text($scope0_id, "a", input.v1, void 0, $scope0_reason, 0)}</p><p>${_patch_text($scope0_id, "b", input.v2, void 0, $scope0_reason, 1)}</p><p>${_patch_text($scope0_id, "c", input.v3, void 0, $scope0_reason, 2)}</p><p>${_patch_text($scope0_id, "d", input.v4, void 0, $scope0_reason, 3)}</p><p>${_patch_text($scope0_id, "e", input.v5, void 0, $scope0_reason, 4)}</p><p>${_patch_text($scope0_id, "f", input.v6, void 0, $scope0_reason, 5)}</p><p>${_patch_text($scope0_id, "g", input.v7, void 0, $scope0_reason, 6)}</p><p>${_patch_text($scope0_id, "h", input.v8, void 0, $scope0_reason, 7)}</p><p>${_patch_text($scope0_id, "i", input.v9, void 0, $scope0_reason, 8)}</p><p>${_patch_text($scope0_id, "j", input.v10, void 0, $scope0_reason, 9)}</p><p>${_patch_text($scope0_id, "k", input.v11, void 0, $scope0_reason, 10)}</p><p>${_patch_text($scope0_id, "l", input.v12, void 0, $scope0_reason, 11)}</p><p>${_patch_text($scope0_id, "m", input.v1, void 0, $scope0_reason, 0)}</p><h1>${_patch_text($scope0_id, "n", $global$1.brand)}</h1></main>`);
	_global_subscribe("a0", $scope0_id, 1);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_patch_effect($scope0_id, "a1", "a2");
	$scope0_page ? _scope($scope0_id, { a2: input.label }) : _filled_guard($scope0_reason, 12) && _patch_write($scope0_id, "a2", input.label);
}, 1, 1);
