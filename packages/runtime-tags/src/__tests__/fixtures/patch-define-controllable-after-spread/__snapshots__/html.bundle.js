// template.marko
const $TextField_content__walks = " b";
const $TextField_content__template = "<input>";
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)($TextField_content__walks)};${((_w0) => `<!>${_w0}<!>`)($TextField_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const TextField = { content: _content("a1", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $cg__valueChange = _client_guard($scope1_reason, 2);
		const { value, valueChange, ...attrs } = input;
		_html(`<input${_patch_input_value($scope1_id, "a", value, valueChange, "n2a", $scope1_reason, 0, "wEa", $scope1_reason, 0)}${_patch_attrs_partial(attrs, {
			value: 1,
			valueChange: 1
		}, "a", $scope1_id, "input", void 0, $scope1_reason, 3)}>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		_script($scope1_id, "a3");
		$cg__valueChange && _patch_write($scope1_id, "xd", value, !(_filled_guard($scope1_reason, 1) && $cg__valueChange));
		_client_guard($scope1_reason, 0) && _patch_write($scope1_id, "xe", valueChange, !(_filled_guard($scope1_reason, 2) && _client_guard($scope1_reason, 1)));
		_patch_join_init($scope1_id, "a4", $scope1_reason, 0, _filled_guard($scope1_reason, 1) && "d", _filled_guard($scope1_reason, 2) && "e");
		_scope($scope1_id, {
			d: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0)) && value,
			e: _unfilled_if($scope1_reason, 0) && valueChange
		});
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _patch_child($scope0_id, "a", 0);
	TextField.content({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "a0")
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
