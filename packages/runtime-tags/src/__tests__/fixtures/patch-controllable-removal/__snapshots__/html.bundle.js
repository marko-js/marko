// template.marko
_shells({ a: "a !a1;E l ;<main><h1> </h1><input></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const handler = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "a0");
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 1)}</h1><input${_attr_input_value($scope0_id, "b", input.value, input.wire ? handler : void 0, "n2b", $scope0_reason, 0, "wEb", $scope0_reason, 0)}>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.value,
		g: _unfilled_if($scope0_reason, 0) && input.wire,
		h: _unfilled_if($scope0_reason, 0) && handler
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va2", input.value, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va3", input.wire, !_server_guard($scope0_reason, 3)));
}, 1);
