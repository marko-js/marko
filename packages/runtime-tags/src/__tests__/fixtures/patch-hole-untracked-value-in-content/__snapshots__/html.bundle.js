// tags/child.marko
let n = 0;
function random() {
	return ++n / 10;
}
const $template$1 = "<a href=\"/\"> </a>";
_shells({ b: "b;D ;<a href=\"/\"> </a>" });
var child_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a href="/">${_patch_text($scope0_id, "a", random(), void 0, 0, 0)}</a>`);
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// tags/wrapper.marko
const $template = "<div><!></div>";
_shells({ c: "c;D%;<div><!></div>" });
var wrapper_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $template$1),
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)("D%l"), $template)
});
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope2);
	wrapper_default({ content: _content_elide("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		child_default({});
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, $scope0_id) });
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1, () => [child_default, wrapper_default]);
