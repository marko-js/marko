// tags/tagged/index.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
_shells({ "__tests__/tags/tagged/index.marko": "__tests__/tags/tagged/index.marko !__tests__/tags/tagged/index.marko_0; D%c%;<button><!>:<!></button>" });
var tagged_default = _template_patch("__tests__/tags/tagged/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_patch_attr($scope0_id, "#button/0", "id", input.id, $scope0_reason, 0)}>${_patch_text($scope0_id, "#text/1", input.tag.name, void 0, $scope0_reason, 2)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/tagged/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/tagged/index.marko0", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_tag: input.tag,
		count
	}, "__tests__/tags/tagged/index.marko", 0, {
		input_tag: ["input.tag"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "input_tag", input.tag);
}, 0, 0);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1),
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1),
	"__tests__/template.marko_0_#text#0/await": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_0_#text#0/await;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks$1), $template$1),
	"__tests__/template.marko_0_#text#1/await": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_0_#text#1/await;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks$1), $template$1),
	"__tests__/template.marko": "__tests__/template.marko;b%b%;<!><!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.first, (a) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		tagged_default({
			id: "a",
			tag: a.tag
		});
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
	}, 1, "__tests__/template.marko_1*content", 1);
	_await($scope0_id, "#text/1", input.second, (b) => {
		const $scope2_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 1) << 5);
		const $childScope2 = _peek_scope_id();
		_patch_child($scope2_id, "#childScope/0", $childScope2);
		tagged_default({
			id: "b",
			tag: b.tag
		});
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "2:2");
	}, 1, "__tests__/template.marko_2*content", 1);
}, 1, () => [tagged_default]);
