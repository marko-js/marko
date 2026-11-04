// tags/field/index.marko
_shells({ b: "b !b0; bD ;<input><em> </em>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_value = _filled_guard($scope0_reason, 1), $fg__input_valueChange = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.value, input.valueChange, 3, $scope0_reason, 0)}>${_el_mark($scope0_id, "a")}<em>${_text_mark($scope0_id, "b", input.value, 1, $scope0_reason, 1)}</em>`);
	_script($scope0_id, "b0");
	_patch_render($scope0_id, "b1", [$fg__input_value && "e", $fg__input_valueChange && "f"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.value,
		f: _unfilled_if($scope0_reason, 0) && input.valueChange
	}) || ($fg__input_value && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.value, !_server_guard($scope0_reason, 1)), $fg__input_valueChange && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({ a: "a !a1;D%bD l ;<main><!><p> </p><button>+</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let text = "hi";
	let open = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(10);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			field_default({
				value: text,
				valueChange: _resume((_new_text) => {
					text = _new_text;
				}, "a0", $scope1_id)
			});
			_patch_child_end();
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<p>${_text_mark($scope0_id, "b", text)}</p><button>+</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: text,
		e: open
	});
}, 1);
