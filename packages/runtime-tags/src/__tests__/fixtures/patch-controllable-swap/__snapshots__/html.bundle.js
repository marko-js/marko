// template.marko
_shells({ a: "a !a2;E l ;<main><h1> </h1><input></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const plain = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "a0");
	const loud = _resume((next) => {
		document.querySelector("main").dataset.got = next.toUpperCase();
	}, "a1");
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 1)}</h1><input${_attr_input_value($scope0_id, "b", input.value, input.big ? loud : plain, 1, $scope0_reason, 0, 1, $scope0_reason, 0)}>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.value,
		g: _unfilled_if($scope0_reason, 0) && input.big,
		h: _unfilled_if($scope0_reason, 0) && plain,
		i: _unfilled_if($scope0_reason, 0) && loud
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va3", input.value, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va4", input.big, !_server_guard($scope0_reason, 3)));
}, 1);
