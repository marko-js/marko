// tags/text-area.marko
const $template = "<textarea></textarea>";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; ;<textarea></textarea>" });
var text_area_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_value__OR__input_valueChange = _unfilled_if($scope0_reason, 0), $fg__input_value = _filled_guard($scope0_reason, 1), $fg__input_valueChange = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<textarea>${_attr_textarea_value($scope0_id, "a", input.value, input.valueChange, 3, $scope0_reason, 0)}</textarea>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_render($scope0_id, "b1", (($fg__input_value ? " d" : "") + ($fg__input_valueChange ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: $ui__input_value__OR__input_valueChange && input.value,
		e: $ui__input_value__OR__input_valueChange && input.valueChange
	}) || ($fg__input_value && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.value, !_server_guard($scope0_reason, 1)), $fg__input_valueChange && $ui__input_value__OR__input_valueChange && _patch_write($scope0_id, "xe", input.valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({
	a: "a;b%bD ;<!><!><p> </p>",
	a1: `a1${_shell_marker([["a3"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let text = "";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(10);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			text_area_default({
				value: text,
				valueChange: _resume((_new_text) => text = _new_text, "a0", $scope1_id)
			});
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_html(`<p>${_text_mark($scope0_id, "b", text)}</p>`);
	_scope($scope0_id, { f: _write_if($scope0_reason, 0) && text });
}, 1);
