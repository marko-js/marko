// tags/child.marko
const $template$1 = "<button><!>: <!></button>";
const $walks$1 = " D%c%l";
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0; D%c%;<button><!>: <!></button>" });
var child_default = _template_patch("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let shown = "none";
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 1)}: ${_text_resume($scope0_id, "#text/2", shown, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_value($scope0_id, "__tests__/tags/child.marko0", shown, 1);
	$scope0_page ? _scope($scope0_id, { input }, "__tests__/tags/child.marko", 0, { input: 0 }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input", input);
}, 0, 0);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks$1), $template$1) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	child_default({
		fn: _resume(() => input.label, "__tests__/template.marko_0/fn", $scope0_id),
		label: input.label
	});
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input_label", input.label);
}, 1, () => [child_default]);
