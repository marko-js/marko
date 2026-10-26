// tags/rows.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/rows.marko_2*content": "__tests__/tags/rows.marko_2*content;D%c%;<em><!>:<!></em>",
	"__tests__/tags/rows.marko": "__tests__/tags/rows.marko !;b%;<!><!><!>",
	"__tests__/tags/rows.marko_1_#text#0/await": "__tests__/tags/rows.marko_1_#text#0/await;D%c%;<em><!>:<!></em>",
	"__tests__/tags/rows.marko_1*shell": "__tests__/tags/rows.marko_1*shell;D%;<div><!></div>"
});
var rows_default = _template("__tests__/tags/rows.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_items__OR__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_await($scope1_id, "#text/0", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "#text/0", item.id, void 0, $scope0_reason, 1)}:${_patch_text($scope2_id, "#text/1", v, 2, $scope0_reason, 2)}</em>`);
			$scope0_page && _scope($scope2_id, { _: $wi__input_items__OR__input_promise && _scope_with_id($scope1_id) }, "__tests__/tags/rows.marko", "3:6");
		}, 1, "__tests__/tags/rows.marko_2*content");
		_html("</div>");
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/rows.marko_1_input_promise#0:4/init");
		$scope0_page && $wi__input_items__OR__input_promise && _scope($scope1_id, {
			"#LoopKey": _unfilled_if($scope0_reason, 2) && item?.id,
			_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id)
		}, "__tests__/tags/rows.marko", "1:2", { "#LoopKey": ["item.id", "1:6"] });
	}, "id", $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/rows.marko_1*shell", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_promise: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise }, "__tests__/tags/rows.marko", 0, { input_promise: ["input.promise"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/rows.marko_fill0", input.promise, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>drop</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>drop</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_html(`<button>drop</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/1");
	rows_default({
		items,
		promise: input.promise
	});
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		items,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { items: "1:6" });
}, 1);
