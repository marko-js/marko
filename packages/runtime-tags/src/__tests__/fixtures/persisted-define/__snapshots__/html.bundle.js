// template.marko
const $thing_content__walks = "D%c%l", $thing_content__template = "<em><!> <!></em>";
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)($thing_content__walks, $thing_content__template),
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `b/${_w0}& b`)($thing_content__walks), ((_w0) => `<!>${_w0}<div>x</div>`)($thing_content__template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const thing = { content: _content_elide("a0", (attrs) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", attrs.x)} ${_patch_text($scope1_id, "b", input.title, 2, $scope0_reason, 1)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	thing.content({ x: input.n });
	_html(`<div${_patch_attr_class($scope0_id, "b", [input.cls, { on: input.on }], $scope0_reason, 0)}${_patch_attr_style($scope0_id, "b", { color: input.color }, $scope0_reason, 5)}>x</div>${_el_resume($scope0_id, "b")}`);
	$scope0_page && _scope($scope0_id, {
		g: _source_if($scope0_reason, 4) && input.cls,
		h: _source_if($scope0_reason, 3) && input.on,
		k: $input_title__closures,
		a: _existing_scope($childScope)
	});
}, 1, 1);
