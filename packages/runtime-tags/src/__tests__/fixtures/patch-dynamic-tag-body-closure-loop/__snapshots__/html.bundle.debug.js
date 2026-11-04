// tags/card.marko
const $template$3 = "<button id=toggle>toggle</button><!><!>";
const $walks$3 = " b%c";
const $setup$3 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button id=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/card.marko_1_input_content#0:4/setup");
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	$fg__input_content && _patch_render($scope0_id, "__tests__/tags/card.marko_1_input_content#0:4/setup", "input_content");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_open#5/fill", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || $fg__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
});

// tags/list.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/list.marko": "__tests__/tags/list.marko;b%;<!><!><!>",
	"__tests__/tags/list.marko_1*shell": "__tests__/tags/list.marko_1*shell;b%;<!><!><!>"
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 2, 0, 0, $wg__input_item, $scope0_reason, 0);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// tags/heading.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({
	"__tests__/tags/heading.marko_2*content": "__tests__/tags/heading.marko_2*content;b%c%;item <!> of <!>",
	"__tests__/tags/heading.marko_1*content": "__tests__/tags/heading.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/heading.marko": `__tests__/tags/heading.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$2)}`
});
var heading_default = _template("__tests__/tags/heading.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 1), $wg__input_type = _write_guard($scope0_reason, 2), $wi__input_n__OR__input_type = _write_if($scope0_reason, 0), $cg__input_type = _client_guard($scope0_reason, 2), $ui__input_n = _unfilled_if($scope0_reason, 1), $ui__input_type2 = _unfilled_if($scope0_reason, 2), $wi__input_n = _write_if($scope0_reason, 1), $wi__input_type = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const $input_type__closures = new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	let $item;
	forUntil(input.n, 0, 1, (i) => $item = attrTags($item, { content: _content("__tests__/tags/heading.marko_1*content", () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wi__i = _write_if($scope1_reason, 0);
		const $scope1_id = _scope_id(), $ui__input_type = _unfilled_if($scope0_reason, 2);
		const $item_content__i__closures = new Set();
		_dynamic_tag($scope1_id, "#text/0", input.type, {}, 2, _content_resume("__tests__/tags/heading.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`item ${_text_mark($scope2_id, "#text/0", i, 2, 4, 0)} of ${_text_mark($scope2_id, "#text/1", input.n, 2, $scope0_reason, 1)}`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/tags/heading.marko_2_input_n#0:3/subscribe", $cg__input_n);
			_unfilled_if() && _patch_subscribe($scope2_id, "__tests__/tags/heading.marko_2_i#1:1/subscribe");
			_subscribe(_unfilled_if() && $wi__i && $item_content__i__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope2_id, { _: ($wi__input_n__OR__input_type || $wi__i) && _scope_with_id($scope1_id) }, "__tests__/tags/heading.marko", "3:15"), $cg__input_n && "__tests__/tags/heading.marko_2_input_n#0:3/subscribe"), "__tests__/tags/heading.marko_2_i#1:1/subscribe");
		}, $scope1_id, ($scope) => $scope1_page ? [{ input_n: input.n }, {
			i,
			_: $scope($scope0_id)
		}] : []), 0, $wg__input_type, $scope0_reason, 2, 0, void 0, 0, 0, "__tests__/tags/heading.marko_2*content");
		$cg__input_type && _patch_render($scope1_id, "__tests__/tags/heading.marko_1_input_type#0:4/subscribe");
		($wi__input_n__OR__input_type || $wi__i) && _subscribe($ui__input_type && $input_type__closures, _scope($scope1_id, {
			i: $ui__input_type && i,
			_: $wi__input_n__OR__input_type && _scope_with_id($scope0_id),
			"ClosureScopes:i/7": $wi__i && $item_content__i__closures
		}, "__tests__/tags/heading.marko", "3:6", { i: "2:8" }), $cg__input_type && "__tests__/tags/heading.marko_1_input_type#0:4/subscribe", $wg__input_type);
		(_client_branch_if("__tests__/tags/heading.marko_2*content", $scope1_id) || $ui__input_type) && _patch_write($scope1_id, "PatchMarkedWrite:i", i) && _patch_subscribers($scope1_id, "__tests__/tags/heading.marko_1_i#1/subscribers", "i");
		$wg__input_type || ($wi__input_n__OR__input_type || $wi__i) && _resume_branch($scope1_id);
	}, $scope0_id, 0) }));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 1);
	list_default({ item: $item });
	_patch_child_end();
	_scope($scope0_id, {
		input_n: $wi__input_type && ($ui__input_type2 || $ui__input_n) && input.n,
		input_type: $wi__input_n && ($ui__input_n || $ui__input_type2) && input.type,
		"ClosureScopes:input_n/5": $wi__input_n && $input_n__closures,
		"ClosureScopes:input_type/6": $wi__input_type && $input_type__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/heading.marko", 0, {
		input_n: ["input.n"],
		input_type: ["input.type"]
	}) || (_filled_guard($scope0_reason, 1) && (_client_branch_if("__tests__/tags/heading.marko_2*content", $scope0_id) || $ui__input_type2) && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/tags/heading.marko_0_input_n#3/subscribers", "input_n"), _filled_guard($scope0_reason, 2) && $ui__input_n && _patch_write($scope0_id, "PatchMarkedWrite:input_type", input.type, !_server_guard($scope0_reason, 2)) && $cg__input_n && _patch_subscribers($scope0_id, "__tests__/tags/heading.marko_0_input_type#4/subscribers", "input_type"));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks$1)};${((_w0) => `<!>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_n = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_n << 1 | $uf__input_n << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	heading_default({
		type: card_default,
		n: input.n
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
