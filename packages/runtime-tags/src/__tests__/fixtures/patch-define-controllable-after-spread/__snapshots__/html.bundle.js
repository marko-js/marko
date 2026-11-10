// template.marko
const $TextField_content__walks = " b";
const $TextField_content__template = "<input>";
_shells({ a: `a;${((_w0) => `/${_w0}&`)($TextField_content__walks)};${$TextField_content__template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_v = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const TextField = { content: _content("a1", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $ui__value__OR__valueChange = _unfilled_if($scope1_reason, 0), $fg__value = _filled_guard($scope1_reason, 1), $fg__valueChange = _filled_guard($scope1_reason, 2);
		const { value, valueChange, ...attrs } = input;
		_html(`<input${_attr_input_value($scope1_id, "a", value, valueChange, 3, $scope1_reason, 0)}${_attrs_partial(attrs, {
			value: 1,
			valueChange: 1
		}, "a", $scope1_id, "input", 0, $scope1_reason, 3)}>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		_script($scope1_id, "a3");
		_patch_render($scope1_id, "a4", [$fg__value && "d", $fg__valueChange && "e"], $scope1_reason, 0);
		_scope($scope1_id, {
			d: $ui__value__OR__valueChange && value,
			e: $ui__value__OR__valueChange && valueChange
		}) || $fg__valueChange && $ui__value__OR__valueChange && _patch_write($scope1_id, "xe", valueChange, 1);
	}, $scope0_id) };
	_set_scope_reason($uf__input_v << 1 | $uf__input_v << 3 | _updates_from($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
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
