// template.marko
_shells({ a: "a !a2;E l ;<main><h1> </h1><input></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const plain = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "a0");
	const loud = _resume((next) => {
		document.querySelector("main").dataset.got = next.toUpperCase();
	}, "a1");
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 1)}</h1><input${_patch_input_value($scope0_id, "b", input.value, input.big ? loud : plain, "n2b", $scope0_reason, 0, "dEb", $scope0_reason, 0)}>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_patch_write($scope0_id, "wf", input.value, 1);
	_patch_write($scope0_id, "wg", input.big, 1);
	_patch_write($scope0_id, "wh", plain, 1);
	_patch_write($scope0_id, "wi", loud, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a5");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.value,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.big,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && plain,
		i: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && loud
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "va3", input.value), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va4", input.big));
}, 1);
