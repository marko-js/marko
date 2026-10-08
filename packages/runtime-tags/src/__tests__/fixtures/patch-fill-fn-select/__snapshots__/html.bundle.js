// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason();
	_source_guard($scope0_reason, 0);
	const $scope0_page = _page_render(), $wi__input_upper = _source_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	const pick = input.upper ? up : low;
	let open = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_patch_write($scope0_id, "f", input.upper, 1);
	_patch_write($scope0_id, "g", up, 1);
	_patch_write($scope0_id, "h", low, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a7");
	_patch_value($scope0_id, "a8", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: _source_if($scope0_reason, 1) && input.upper,
		g: $wi__input_upper && up,
		h: $wi__input_upper && low,
		j: pick,
		k: open
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a3", input.upper), _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "a4", up), _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "a5", low), _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a6", pick), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "e", input.title));
}, 1);
