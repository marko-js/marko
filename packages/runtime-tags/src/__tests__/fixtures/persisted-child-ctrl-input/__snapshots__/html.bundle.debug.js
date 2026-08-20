// tags/field/index.marko
const $template$1 = "<input><em> </em>";
const $walks$1 = " bD l";
_shells({ "__tests__/tags/field/index.marko": "__tests__/tags/field/index.marko !__tests__/tags/field/index.marko_0; bD ;<input><em> </em>" });
var field_default = _template_persisted("__tests__/tags/field/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.value, input.valueChange)}${_patch_bind($scope0_id, "ControlledHandler:#input/0", input.valueChange)}${_patch_control($scope0_id, "#input/0", 2, input.value, $scope0_owned, 0)}>${_el_resume($scope0_id, "#input/0")}<em>${_patch_text($scope0_id, "#text/1", input.value, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/1")}</em>`);
	_script($scope0_id, "__tests__/tags/field/index.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_value: input.value,
		input_valueChange: input.valueChange
	}, "__tests__/tags/field/index.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"],
		"ControlledHandler:#input/0": ["valueChange"]
	});
}, 0, 0);

// template.marko
const $template = "<main><!><p> </p><button>+</button></main>";
const $walks = "D%bD l l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%bD l ;<main><!><p> </p><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let text = "hi";
	let open = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			field_default({
				value: text,
				valueChange: _resume((_new_text) => {
					text = _new_text;
				}, "__tests__/template.marko_1/valueChange", $scope1_id)
			});
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<p>${_escape(text)}${_el_resume($scope0_id, "#text/1")}</p><button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		text,
		open
	}, "__tests__/template.marko", 0, {
		text: "1:6",
		open: "2:6"
	});
	_resume_branch($scope0_id);
}, 1, () => [field_default]);
