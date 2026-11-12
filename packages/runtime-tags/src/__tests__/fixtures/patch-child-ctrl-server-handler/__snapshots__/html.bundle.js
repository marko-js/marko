// tags/field/index.marko
_shells({ b: "b !b0; ;<input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_value__OR__input_valueChange = _unfilled_if($scope0_reason, 0), $fg__input_value = _filled_guard($scope0_reason, 1), $fg__input_valueChange = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.value, input.valueChange, 3, $scope0_reason, 0)}>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_render($scope0_id, "b1", (($fg__input_value ? " d" : "") + ($fg__input_valueChange ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_value__OR__input_valueChange && input.value,
		e: $ui__input_value__OR__input_valueChange && input.valueChange
	}) || ($fg__input_value && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.value, !_server_guard($scope0_reason, 1)), $fg__input_valueChange && $ui__input_value__OR__input_valueChange && _patch_write($scope0_id, "xe", input.valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button><output></output></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_updates_from($scope0_reason, 0);
	const $sg__input_prefix = _server_guard($scope0_reason, 0), $fg__input_prefix = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_prefix && _patch_write($scope0_id, "xe", input.prefix, !$sg__input_prefix);
	const handle = _bind_resume((next) => {
		document.querySelector("output").textContent = input.prefix + next;
	}, "a0", $scope0_id, 1);
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}<output></output></main>`);
	_script($scope0_id, "a2");
	$fg__input_prefix && _patch_render($scope0_id, "a1", "f e");
	_scope($scope0_id, {
		e: input.prefix,
		f: handle,
		g: open
	}) || $fg__input_prefix && _patch_write($scope0_id, "xf", handle, !$sg__input_prefix);
}, 1);
