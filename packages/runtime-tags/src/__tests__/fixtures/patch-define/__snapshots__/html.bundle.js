// template.marko
const $thing_content__walks = "D%c%l";
const $thing_content__template = "<em><!> <!></em>";
_shells({ a: `a;${((_w0) => `/${_w0}& b`)($thing_content__walks)};${((_w0) => `${_w0}<div>x</div>`)($thing_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_cls__OR__input_on = _unfilled_if($scope0_reason, 0), $ui__input_on = _unfilled_if($scope0_reason, 4), $ui__input_cls = _unfilled_if($scope0_reason, 3), $fg__input_cls = _filled_guard($scope0_reason, 3), $fg__input_on = _filled_guard($scope0_reason, 4), $wi__input_title = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const thing = { content: _content("a0", (attrs) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", attrs.x, 1, $scope1_reason, 0)} ${_text_mark($scope1_id, "b", input.title, 2, $scope0_reason, 1)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: $wi__input_title && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a1");
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	thing.content({ x: input.n });
	_patch_child_end();
	_html(`<div${_attr_class([input.cls, { on: input.on }], $scope0_id, "b", $scope0_reason, 0)}${_attr_style({ color: input.color }, $scope0_id, "b", $scope0_reason, 5)}>x</div>${_el_mark($scope0_id, "b", _updates_from($scope0_reason, 0) || _updates_from($scope0_reason, 5))}`);
	_patch_render($scope0_id, "a2", [$fg__input_cls && "g", $fg__input_on && "h"], $scope0_reason, 0);
	_scope($scope0_id, {
		g: ($ui__input_on || $ui__input_cls__OR__input_on) && input.cls,
		h: ($ui__input_cls || $ui__input_cls__OR__input_on) && input.on,
		k: $wi__input_title && $input_title__closures,
		a: _existing_scope($childScope)
	}) || ($fg__input_cls && $ui__input_on && _patch_write($scope0_id, "xg", input.cls, !_server_guard($scope0_reason, 3)), $fg__input_on && $ui__input_cls && _patch_write($scope0_id, "xh", input.on, !_server_guard($scope0_reason, 4)));
}, 1);
