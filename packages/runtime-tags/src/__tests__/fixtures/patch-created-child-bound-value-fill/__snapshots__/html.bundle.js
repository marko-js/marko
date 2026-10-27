// tags/text-area.marko
const $template = "<textarea></textarea>";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; ;<textarea></textarea>" });
var text_area_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<textarea>${_patch_textarea_value($scope0_id, "a", input.value, input.valueChange, "n2a", $scope0_reason, 0, "wEa", $scope0_reason, 0)}</textarea>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b3");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.value,
		e: _unfilled_if($scope0_reason, 0) && input.valueChange
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb1", input.value, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb2", input.valueChange, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({
	a: "a;b%bD ;<!><!><p> </p>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([["a3"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let text = "";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(10);
			const $childScope = _patch_child($scope1_id, "a", 0);
			text_area_default({
				value: text,
				valueChange: _resume((_new_text) => {
					text = _new_text;
				}, "a0", $scope1_id)
			});
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", text)}</p>`);
	_scope($scope0_id, { f: _write_if($scope0_reason, 0) && text });
}, 1);
