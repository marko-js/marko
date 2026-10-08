// tags/field/index.marko
_shells({ b: "b !b0; ;<input>" });
var field_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.value, input.valueChange)}${_patch_bind($scope0_id, "Ea", input.valueChange, $scope0_reason, 0)}${_patch_control($scope0_id, "a", 2, input.value, $scope0_reason, 0)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_write($scope0_id, "d", input.value, 1);
	_patch_write($scope0_id, "e", input.valueChange, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b3");
	$scope0_page ? _scope($scope0_id, {
		d: _source_if($scope0_reason, 2) && input.value,
		e: _source_if($scope0_reason, 0) && input.valueChange
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "b1", input.value), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b2", input.valueChange));
});

// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>+</button><output></output></main>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const handle = _resume((next) => {
		document.querySelector("output").textContent = input.prefix + next;
	}, "a0", $scope0_id);
	let open = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}<output></output></main>`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "a3", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.prefix,
		f: handle,
		g: open
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a2", handle), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "e", input.prefix));
}, 1);
