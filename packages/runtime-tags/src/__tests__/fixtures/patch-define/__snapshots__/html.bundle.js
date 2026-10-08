// template.marko
const $thing_content__walks = "D%c%l";
const $thing_content__template = "<em><!> <!></em>";
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)($thing_content__walks, $thing_content__template),
	a: /*@__PURE__*/ (() => `a !;${((_w0) => `b/${_w0}& b`)($thing_content__walks)};${((_w0) => `<!>${_w0}<div>x</div>`)($thing_content__template)}`)()
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const thing = { content: _content_elide("a0", (attrs) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", attrs.x)} ${_patch_text($scope1_id, "b", input.title, 2, $scope0_reason, 1)}</em>`);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	thing.content({ x: input.n });
	_html(`<div${_patch_attr_class($scope0_id, "b", [input.cls, { on: input.on }], $scope0_reason, 0)}${_patch_attr_style($scope0_id, "b", { color: input.color }, $scope0_reason, 5)}>x</div>${_el_resume($scope0_id, "b")}`);
	_patch_write($scope0_id, "g", input.cls, 1);
	_patch_write($scope0_id, "h", input.on, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a4");
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.cls,
		h: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.on,
		k: $input_title__closures,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "a2", input.cls), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "a3", input.on));
}, 1);
