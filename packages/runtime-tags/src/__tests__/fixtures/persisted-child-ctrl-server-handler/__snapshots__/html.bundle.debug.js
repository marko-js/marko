// tags/field/index.marko
var field_default = _template_persisted("__tests__/tags/field/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.value, input.valueChange)}${_patch_bind($scope0_id, "ControlledHandler:#input/0", input.valueChange)}${_patch_control($scope0_id, "#input/0", 2, input.value, $scope0_owned, 0)}>${_el_resume($scope0_id, "#input/0")}`);
	_script($scope0_id, "__tests__/tags/field/index.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_value: input.value,
		input_valueChange: input.valueChange
	}, "__tests__/tags/field/index.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		"ControlledHandler:#input/0": ["valueChange", "1:26"]
	});
}, 0, 0);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const handle = _resume((next) => {
		document.querySelector("output").textContent = input.prefix + next;
	}, "__tests__/template.marko_0/handle", $scope0_id);
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			field_default({
				value: "a",
				valueChange: handle
			});
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}<output></output></main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_prefix: input.prefix,
		handle,
		open
	}, "__tests__/template.marko", 0, {
		input_prefix: ["input.prefix"],
		handle: "1:8",
		open: "4:6"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", handle), _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "input_prefix", input.prefix));
	_resume_branch($scope0_id);
}, 1, () => [field_default]);
