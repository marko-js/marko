// template.marko
_shells({ a: "a !a2;E l ;<main><h1> </h1><input></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_value__OR__input_big = _source_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const plain = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "a0");
	const loud = _resume((next) => {
		document.querySelector("main").dataset.got = next.toUpperCase();
	}, "a1");
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 1)}</h1><input${_attr_input_value($scope0_id, "b", input.value, input.big ? loud : plain)}${_patch_bind($scope0_id, "Eb", input.big ? loud : plain, $scope0_reason, 0)}${_patch_control($scope0_id, "b", 2, input.value, $scope0_reason, 0)}>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_patch_write($scope0_id, "f", input.value, 1);
	_patch_write($scope0_id, "g", input.big, 1);
	_patch_write($scope0_id, "h", plain, 1);
	_patch_write($scope0_id, "i", loud, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a5");
	$scope0_page ? _scope($scope0_id, {
		f: _source_if($scope0_reason, 3) && input.value,
		g: $wi__input_value__OR__input_big && input.big,
		h: $wi__input_value__OR__input_big && plain,
		i: $wi__input_value__OR__input_big && loud
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "a3", input.value), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "a4", input.big));
}, 1);
