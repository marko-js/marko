// tags/my-list.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/my-list.marko": "__tests__/tags/my-list.marko;b%;<!><!><!>",
	"__tests__/tags/my-list.marko_1*shell": "__tests__/tags/my-list.marko_1*shell;D%;<div><!></div>"
});
var my_list_default = _template("__tests__/tags/my-list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_row = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (r) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_dynamic_tag($scope1_id, "#text/0", r, {}, 2, 0, 0, $wg__input_row, $scope0_reason, 0);
		_html("</div>");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/my-list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/my-list.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/my-list.marko", 0);
});

// tags/wrap.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], ["__tests__/tags/wrap.marko_0"]], ["#childScope/0>", $setup$2]);
_shells({
	"__tests__/tags/wrap.marko_1*content": "__tests__/tags/wrap.marko_1*content; ; ",
	"__tests__/tags/wrap.marko": `__tests__/tags/wrap.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$2)}`
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 2), $ui__input_items = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	let $row;
	forOf(input.items, (item) => $row = attrTags($row, { content: _content("__tests__/tags/wrap.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 2);
		$ui__input_label && _patch_write($scope1_id, "PatchMarkedWrite:item", item);
		_html(_text_mark($scope1_id, "#text/0", item + input.label, 1, (2 | $uf__input_label) << 1, 0));
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/tags/wrap.marko_1_input_label#0:4/subscribe");
		_patch_render($scope1_id, "__tests__/tags/wrap.marko_1_input_label#0:4_item#1/setup", "item" + (_filled_guard($scope0_reason, 2) ? " >input_label" : ""), (2 | $uf__input_label) << 1, 0);
		_subscribe($ui__input_label && $input_label__closures, _scope($scope1_id, {
			item: $ui__input_label && item,
			_: (_write_if($scope0_reason, 0) || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}, "__tests__/tags/wrap.marko", "3:6", { item: "2:8" }), _client_guard($scope0_reason, 2) && "__tests__/tags/wrap.marko_1_input_label#0:4/subscribe");
	}, $scope0_id, 0) }));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	my_list_default({ row: $row });
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/wrap.marko_0", 0);
	_scope($scope0_id, {
		input_label: ($ui__input_items || _unfilled_if($scope0_reason, 2)) && input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 2) && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/wrap.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 2) && $ui__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "__tests__/tags/wrap.marko_0_input_label#4/subscribers", "input_label");
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>rename</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks$1)};${((_w0) => `<!>${_w0}<button>rename</button>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = "c";
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrap_default({
		items: input.items,
		label: c
	});
	_patch_child_end();
	_html(`<button>rename</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		c,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { c: "1:6" });
}, 1);
