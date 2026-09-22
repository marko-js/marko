// child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D%c%;<button><!>:<!></button>" });
var child_default = _template_patch("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_value($scope0_id, "__tests__/child.marko0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)),
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)),
	"__tests__/template.marko_0_#text#0/await": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_0_#text#0/await;${_w0};${_w1}`)(((_w0) => `b%b/${_w0}&b`)($walks$1), ((_w0) => `<!><!>${_w0}<!>`)($template$1)),
	"__tests__/template.marko_0_#text#1/await": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_0_#text#1/await;${_w0};${_w1}`)(((_w0) => `b%b/${_w0}&b`)($walks$1), ((_w0) => `<!><!>${_w0}<!>`)($template$1)),
	"__tests__/template.marko": "__tests__/template.marko;D%b%;<main><!><!></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_await($scope0_id, "#text/0", input.first, (first) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/1", $childScope);
		$Child_withLoadAssets({ label: first });
		_scope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "4:4");
	}, 1, "__tests__/template.marko_1*content", 1);
	_await($scope0_id, "#text/1", input.second, (second) => {
		const $scope2_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope2 = _peek_scope_id();
		_patch_child($scope2_id, "#childScope/1", $childScope2);
		$Child_withLoadAssets({ label: second });
		_scope($scope2_id, { "#childScope/1": _existing_scope($childScope2) }, "__tests__/template.marko", "5:4");
	}, 1, "__tests__/template.marko_2*content", 1);
	_html("</main>");
}, 1, () => [$Child_withLoadAssets]);
