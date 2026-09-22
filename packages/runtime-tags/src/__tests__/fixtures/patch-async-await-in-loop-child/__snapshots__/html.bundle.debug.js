// tags/row.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/row.marko_1*content": "__tests__/tags/row.marko_1*content;D ;<em> </em>",
	"__tests__/tags/row.marko_0_#text#0/await": "__tests__/tags/row.marko_0_#text#0/await;D ;<em> </em>",
	"__tests__/tags/row.marko": "__tests__/tags/row.marko;b%;<!><!><!>"
});
var row_default = _template_patch("__tests__/tags/row.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.item.promise, (value) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "#text/0", value, void 0, $scope0_reason, 0)}</em>`);
		_scope($scope1_id, {}, "__tests__/tags/row.marko", "1:2");
	}, 1, "__tests__/tags/row.marko_1*content", 1);
}, 0, 0);

// template.marko
const $template = "<main><!><button>interactive</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>interactive</button></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		row_default({ item });
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:4");
	}, "id", $scope0_id, "#text/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, () => [row_default]);
