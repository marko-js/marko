// template.marko
const $thing_content__walks = "D%c%l";
const $thing_content__template = "<em><!> <!></em>";
_shells({ a: /*@__PURE__*/ (() => `a !;${((_w0) => `b/${_w0}& b`)($thing_content__walks)};${((_w0) => `<!>${_w0}<div>x</div>`)($thing_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const thing = { content: _content("a0", (attrs) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "a", attrs.x, void 0, $scope1_reason, 0)} ${_patch_text($scope1_id, "b", input.title, 2, $scope0_reason, 1)}</em>`);
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: $wi__input_title && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a1");
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	thing.content({ x: input.n });
	_html(`<div${_patch_attr_class($scope0_id, "ab$class", [input.cls, { on: input.on }], $scope0_reason, 0)}${_patch_attr_style($scope0_id, "ab$style", { color: input.color }, $scope0_reason, 5)}>x</div>${_el_resume($scope0_id, "b", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 5))}`);
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && input.cls,
		h: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.on,
		k: $wi__input_title && $input_title__closures,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 4) && _patch_fill($scope0_id, "va2", input.cls, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va3", input.on, !_server_guard($scope0_reason, 4)));
}, 1);
