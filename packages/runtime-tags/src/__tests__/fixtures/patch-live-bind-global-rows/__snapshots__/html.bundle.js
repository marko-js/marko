// tags/stepper.marko
const $template = "<input type=number>";
const $setup = [[], ["b2"]];
_shells({ b: "b !b2; ;<input type=number>" });
var stepper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_max = _server_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xd", input.max, !$sg__input_max);
	const clamp = _bind_resume((v) => Math.min(input.max, Number(v)), "b0", $scope0_id);
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xh", clamp, !$sg__input_max);
	let current = input.value;
	_html(`<input${_patch_input_value($scope0_id, "a", current, _bind_resume((_new_current) => {
		current = clamp(_new_current);
	}, "b1", $scope0_id), void 0, void 0, void 0, "wEa")} type=number>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b2");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b5");
	_patch_effect($scope0_id, "ib6", _filled_guard($scope0_reason, 1) && "h");
	const $currentChange = input.valueChange || void 0;
	_patch_let_change($scope0_id, "vb7", current, "wj", $currentChange, $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, {
		d: input.max,
		e: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.value,
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.valueChange,
		h: clamp,
		i: _write_if($scope0_reason, 1) && current,
		j: $currentChange
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "vb3", input.value, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb4", input.valueChange, !_server_guard($scope0_reason, 3)));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_for_of($global$1.rows, (row) => {
		const $scope1_id = _scope_id();
		let qty = row.qty;
		_set_scope_reason(50);
		const $childScope = _patch_child($scope1_id, "a", 0);
		stepper_default({
			value: qty,
			valueChange: _resume((_new_qty) => {
				qty = _new_qty;
			}, "a0", $scope1_id),
			max: row.qty
		});
		_patch_child_end();
		_patch_fill($scope1_id, "va1", qty, 1);
		$scope0_page && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a2");
	_fill_global_subscribe("a3", $scope0_id);
	$scope0_page && _scope($scope0_id, {});
}, 1);
