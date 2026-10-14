// template.marko
const $TextField_content__walks = " b";
const $TextField_content__template = "<input>";
_shells({
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1 !a2 a3;${_w0};${_w1}`)($TextField_content__walks, $TextField_content__template),
	a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)($TextField_content__walks)};${((_w0) => `<!>${_w0}<!>`)($TextField_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const TextField = { content: _content_elide("a1", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const { value, valueChange, ...attrs } = input;
		_html(`<input${_patch_input_value($scope1_id, "a", value, valueChange, "n2a", $scope1_reason, 0, "dEa", $scope1_reason, 0)}${_patch_attrs_partial(attrs, {
			value: 1,
			valueChange: 1
		}, "a", $scope1_id, "input", void 0, $scope1_reason, 3)}>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a2");
		_script($scope1_id, "a3");
		_patch_write($scope1_id, "wd", value, 1);
		_patch_write($scope1_id, "we", valueChange, 1);
		_client_guard($scope1_reason, 0) && _patch_init($scope1_id, "a6");
		$scope1_page ? _scope($scope1_id, {
			d: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && value,
			e: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 2)) && valueChange
		}) : (_filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 2) && _patch_value($scope1_id, "va4", value), _filled_guard($scope1_reason, 2) && _client_guard($scope1_reason, 1) && _patch_value($scope1_id, "va5", valueChange));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _patch_child($scope0_id, "a");
	TextField.content({
		placeholder: input.hint,
		value: input.v,
		valueChange: _resume(function(next) {
			document.title = next;
		}, "a0")
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
