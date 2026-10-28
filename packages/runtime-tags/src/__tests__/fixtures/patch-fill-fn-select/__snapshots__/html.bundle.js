// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $sg__input_title = _server_guard($scope0_reason, 1), $cg__input_upper = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	const pick = input.upper ? up : low;
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.title,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.upper,
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && up,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && low,
		j: pick,
		k: open
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.upper, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && $cg__input_upper && _patch_fill($scope0_id, "va4", up, !$sg__input_title), _filled_guard($scope0_reason, 1) && $cg__input_upper && _patch_fill($scope0_id, "va5", low, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va6", pick, !_server_guard($scope0_reason, 0)));
}, 1);
