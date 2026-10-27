// tags/field/index.marko
_shells({ b: "b !b0; ;<input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_patch_input_value($scope0_id, "a", input.value, input.valueChange, "n2a", $scope0_reason, 0, "wEa", $scope0_reason, 0)}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b3");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.value,
		e: _unfilled_if($scope0_reason, 0) && input.valueChange
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb1", input.value, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>+</button><output></output></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_prefix = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.prefix, !$sg__input_prefix);
	const handle = _bind_resume((next) => {
		document.querySelector("output").textContent = input.prefix + next;
	}, "a0", $scope0_id);
	let open = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}<output></output></main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.prefix,
		f: handle,
		g: open
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", handle, !$sg__input_prefix);
}, 1);
