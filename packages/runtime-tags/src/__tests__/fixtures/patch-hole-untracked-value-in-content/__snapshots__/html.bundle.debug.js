// tags/child.marko
let n = 0;
function random() {
	return ++n / 10;
}
const $template$2 = "<a href=\"/\"> </a>";
const $walks$2 = "D l";
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;D ;<a href=\"/\"> </a>" });
var child_default = _template_patch("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a href="/">${_patch_text($scope0_id, "#text/0", random(), void 0, 0, 0)}</a>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
}, 0, 0);

// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko;D%;<div><!></div>" });
var wrapper_default = _template_patch("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/wrapper.marko", 0);
}, 0, 0);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $template$2),
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)("D%l"), $template$1)
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope2);
	wrapper_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		child_default({});
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
	}, $scope0_id) });
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", 0);
}, 1, () => [child_default, wrapper_default]);
