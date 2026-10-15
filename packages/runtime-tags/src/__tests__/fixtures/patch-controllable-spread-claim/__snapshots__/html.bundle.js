// template.marko
_shells({ a: "a !a0; c ;<input><p id=out>-</p><button>interactive</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_attrs({
		type: "checkbox",
		...input.attrs,
		checked: input.on
	}, "a", $scope0_id, "input", 1, $scope0_reason, 0)}>${_el_resume($scope0_id, "a")}<p id=out>-</p><button>interactive</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_patch_write($scope0_id, "we", input.attrs, 1);
	_patch_write($scope0_id, "wf", input.on, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a4");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.attrs,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.on
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va2", input.attrs, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va3", input.on, !_server_guard($scope0_reason, 2)));
}, 1);
