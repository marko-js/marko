// template.marko
const $thing_content__walks = "D%c%l", $thing_content__template = "<em><!> <!></em>";
_shells({ a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)($thing_content__walks, $thing_content__template) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const thing = { content: _content_elide("a0", (attrs) => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "a", attrs.x)} ${_patch_text($scope1_id, "b", input.title, 2, $scope0_owned, 1)}</em>`);
		_subscribe(_source_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	thing.content({ x: input.n });
	_html(`<div${_patch_attr_class($scope0_id, "b", [input.cls, { on: input.on }], $scope0_owned, 0)}${_patch_attr_style($scope0_id, "b", { color: input.color }, $scope0_owned, 5)}>x</div>${_el_resume($scope0_id, "b")}`);
	$scope0_reason && _scope($scope0_id, {
		g: input.cls,
		h: input.on,
		k: $input_title__closures,
		a: _existing_scope($childScope)
	});
}, 1, 1);
