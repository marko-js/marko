// template.marko
const $thing_content__walks = "D%c%l", $thing_content__template = "<em><!> <!></em>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<div>x</div>`)($thing_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($thing_content__walks);
_shells({ "__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)($thing_content__walks, $thing_content__template) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const thing = { content: _content_elide("__tests__/template.marko_1*content", (attrs) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", attrs.x)} ${_patch_text($scope1_id, "#text/1", input.title, 2, $scope0_owned, 1)}</em>`);
		_subscribe(_source_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
	}, $scope0_id) };
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	thing.content({ x: input.n });
	_html(`<div${_patch_attr_class($scope0_id, "#div/1", [input.cls, { on: input.on }], $scope0_owned, 0)}${_patch_attr_style($scope0_id, "#div/1", { color: input.color }, $scope0_owned, 5)}>x</div>${_el_resume($scope0_id, "#div/1")}`);
	$scope0_reason && _scope($scope0_id, {
		input_cls: input.cls,
		input_on: input.on,
		"ClosureScopes:input_title": $input_title__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_cls: ["input.cls"],
		input_on: ["input.on"]
	});
}, 1, 1);
