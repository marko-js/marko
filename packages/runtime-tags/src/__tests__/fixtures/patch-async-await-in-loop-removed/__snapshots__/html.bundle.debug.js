// tags/rows.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/rows.marko_2*content": "__tests__/tags/rows.marko_2*content;D%c%;<em><!>:<!></em>",
	"__tests__/tags/rows.marko": "__tests__/tags/rows.marko !;b%;<!><!><!>",
	"__tests__/tags/rows.marko_1_#text#0/await": "__tests__/tags/rows.marko_1_#text#0/await;D%c%;<em><!>:<!></em>",
	"__tests__/tags/rows.marko_1*shell": "__tests__/tags/rows.marko_1*shell;D%;<div><!></div>"
});
var rows_default = _template_patch("__tests__/tags/rows.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_items__OR__input_promise = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__setup__closures = new Set();
		_html("<div>");
		_await($scope1_id, "#text/0", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "#text/0", item.id, void 0, $scope0_reason, 1)}:${_patch_text($scope2_id, "#text/1", v, 2, $scope0_reason, 2)}</em>`);
			_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__setup__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/rows.marko", "3:6"));
		}, 1, "__tests__/tags/rows.marko_2*content");
		_html("</div>");
		$scope0_page && _scope($scope1_id, {
			"#LoopKey": _source_if($scope0_reason, 2) && item?.id,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:#LoopKey": $for_content__setup__closures
		}, "__tests__/tags/rows.marko", "1:2", { "#LoopKey": ["item.id", "1:6"] });
	}, "id", $scope0_id, "#text/0", 1, $sg__input_items__OR__input_promise, _source_guard($scope0_reason, 1), void 0, void 0, "__tests__/tags/rows.marko_1*shell", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_promise: _source_if($scope0_reason, 1) && input.promise }, "__tests__/tags/rows.marko", 0, { input_promise: ["input.promise"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "__tests__/tags/rows.marko0", input.promise);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>drop</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => ` b/${_w0}&b`)("b%c"), ((_w0) => `<button>drop</button>${_w0}<!>`)($template$1)) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_html(`<button>drop</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	rows_default({
		items,
		promise: input.promise
	});
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		items,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { items: "1:6" });
}, 1, () => [rows_default]);
