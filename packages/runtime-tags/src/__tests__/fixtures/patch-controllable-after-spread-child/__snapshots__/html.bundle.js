// tags/text-field.marko
const $template = "<input>";
const $setup$1 = [[], ["b0", "b1"]];
_shells({ b: "b !b0 b1; ;<input>" });
var text_field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_value__OR__input_valueChange = _unfilled_if($scope0_reason, 0), $fg__input_value = _filled_guard($scope0_reason, 1), $fg__input_valueChange = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { value, valueChange, ...attrs } = input;
	_html(`<input${_attr_input_value($scope0_id, "a", value, valueChange, 3, $scope0_reason, 0)}${_attrs_partial(attrs, {
		value: 1,
		valueChange: 1
	}, "a", $scope0_id, "input", 0, $scope0_reason, 3)}>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_patch_render($scope0_id, "b2", (($fg__input_value ? " d" : "") + ($fg__input_valueChange ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_value__OR__input_valueChange && value,
		e: $ui__input_value__OR__input_valueChange && valueChange
	}) || ($fg__input_value && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", value, !_server_guard($scope0_reason, 1)), $fg__input_valueChange && $ui__input_value__OR__input_valueChange && _patch_write($scope0_id, "xe", valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_v = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_v << 1 | $uf__input_v << 3 | _updates_from($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	text_field_default({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "a0")
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
