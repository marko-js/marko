// tags/field/index.marko
_shells({ b: "b !b0; bD ;<input><em> </em>" });
var field_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.value, input.valueChange)}${_patch_bind($scope0_id, "Ea", input.valueChange, 0, 0)}${_patch_control($scope0_id, "a", 2, input.value, $scope0_owned, 0)}>${_el_resume($scope0_id, "a")}<em>${_patch_text($scope0_id, "b", input.value, void 0, $scope0_owned, 1)}</em>`);
	_script($scope0_id, "b0");
	$scope0_reason && _scope($scope0_id, {
		e: input.value,
		f: input.valueChange
	});
}, 0, 0);

// template.marko
_shells({ a: "a !a1;D%bD l ;<main><!><p> </p><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let text = "hi";
	let open = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			field_default({
				value: text,
				valueChange: _resume((_new_text) => {
					text = _new_text;
				}, "a0", $scope1_id)
			});
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<p>${_text_resume($scope0_id, "b", text)}</p><button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {
		d: text,
		e: open
	});
}, 1, () => [field_default]);
