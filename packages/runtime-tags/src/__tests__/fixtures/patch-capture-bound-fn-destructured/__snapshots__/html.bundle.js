// tags/child.marko
const $template = "<button><!>: <!></button>";
const $walks = " D%c%l";
_shells({ b: "b !b0; D%c%;<button><!>: <!></button>" });
var child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const { fn, label } = input;
	let shown = "none";
	_html(`<button>${_patch_text($scope0_id, "b", label, void 0, $scope0_reason, 1)}: ${_text_resume($scope0_id, "c", shown, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", shown, 1);
	$scope0_page ? _scope($scope0_id, { f: fn }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "f", fn);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks), $template) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	child_default({
		fn: _resume(() => input.label, "a0", $scope0_id),
		label: input.label
	});
	$scope0_page ? _scope($scope0_id, {
		d: input.label,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "d", input.label);
}, 1, () => [child_default]);
