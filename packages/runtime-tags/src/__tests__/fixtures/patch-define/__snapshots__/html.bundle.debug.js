// template.marko
const $thing_content__walks = "D%c%l";
const $thing_content__template = "<em><!> <!></em>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<div>x</div>`)($thing_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($thing_content__walks);
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)($thing_content__walks, $thing_content__template),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !;${((_w0) => `b/${_w0}& b`)($thing_content__walks)};${((_w0) => `<!>${_w0}<div>x</div>`)($thing_content__template)}`)()
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const thing = { content: _content_elide("__tests__/template.marko_1*content", (attrs) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", attrs.x)} ${_patch_text($scope1_id, "#text/1", input.title, 2, $scope0_reason, 1)}</em>`);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_title#0:4/init");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	thing.content({ x: input.n });
	_html(`<div${_patch_attr_class($scope0_id, "#div/1", [input.cls, { on: input.on }], $scope0_reason, 0)}${_patch_attr_style($scope0_id, "#div/1", { color: input.color }, $scope0_reason, 5)}>x</div>${_el_resume($scope0_id, "#div/1")}`);
	_patch_write($scope0_id, "input_cls", input.cls, 1);
	_patch_write($scope0_id, "input_on", input.on, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/template.marko_0_input_cls#6_input_on#7/init");
	$scope0_page ? _scope($scope0_id, {
		input_cls: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.cls,
		input_on: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.on,
		"ClosureScopes:input_title/10": $input_title__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_cls: ["input.cls"],
		input_on: ["input.on"]
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "__tests__/template.marko_fill0", input.cls), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_value($scope0_id, "__tests__/template.marko_fill1", input.on));
}, 1);
