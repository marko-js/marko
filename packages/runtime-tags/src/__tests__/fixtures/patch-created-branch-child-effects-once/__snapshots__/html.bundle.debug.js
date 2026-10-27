// tags/inner.marko
const $template$3 = "<span>inner</span>";
const $walks$3 = "b";
const $setup$3 = [[], ["__tests__/tags/inner.marko_0"]];
_shells({ "__tests__/tags/inner.marko": "__tests__/tags/inner.marko !__tests__/tags/inner.marko_0,<span>inner</span>" });
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>inner</span>");
	_script($scope0_id, "__tests__/tags/inner.marko_0", 0);
});

// tags/outer.marko
const $template$2 = $template$3;
const $walks$2 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b");
const $setup$2 = _shell_setup([[], ["__tests__/tags/outer.marko_0"]], ["#childScope/0>", $setup$3]);
_shells({ "__tests__/tags/outer.marko": /*@__PURE__*/ ((_w0) => `__tests__/tags/outer.marko${_shell_marker($setup$2)};${((_w0) => `/${_w0}&`)("b")};${_w0}`)($template$3) });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	inner_default({});
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/outer.marko", 0);
});

// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;D%;<div><!></div>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.body, {}, 2, 0, 0, $wg__input_body, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const $Body_content__walks = "b";
const $Body_content__template = "<b>define</b>";
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": /*@__PURE__*/ (() => `__tests__/template.marko_3*content${_shell_marker(_shell_setup([[], ["__tests__/template.marko_3"]], ["#childScope/0>", $setup$3]))}`)(),
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2;b%;<em>content</em><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_count#0:9/init"], ["__tests__/template.marko_1"]], ["#childScope/0>", $setup$2], [">#childScope/1>", [[], ["__tests__/template.marko_4"]]], ["#childScope/4>", $setup$1]))};${/*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&%b%b/${_w2}&%c`)($walks$2, $Body_content__walks, "D%l")};${/*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}<!><!>${_w2}<!><!>`)($template$2, $Body_content__template, $template$1)}`)(),
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell;D ;<i> </i>",
	"__tests__/template.marko_6*shell": "__tests__/template.marko_6*shell !__tests__/template.marko_6,<u>nested</u>",
	"__tests__/template.marko_7*shell": "__tests__/template.marko_7*shell,",
	"__tests__/template.marko_8*shell": "__tests__/template.marko_8*shell,"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _server_guard($scope0_reason, 4), $scope0_page = _page_render(), $cg__input_items = _client_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 3), $wi__input_items = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_items__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Body = { content: _content("__tests__/template.marko_4*content", () => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason();
		_html("<b>define</b>");
		_script($scope4_id, "__tests__/template.marko_4", 0);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			outer_default({});
			_patch_child_end();
			const $childScope2 = _patch_child($scope1_id, "#childScope/1", 1);
			Body.content({});
			_patch_child_end();
			_for_of(input.items, (item) => {
				const $scope5_id = _scope_id();
				_filled_guard($scope0_reason, 4) && _patch_write($scope5_id, "PatchMarkedWrite:item", item, !$sg__input_items);
				_html(`<i>${_patch_text($scope5_id, "#text/0", item, void 0, $scope0_reason, 4)}</i>`);
				_script($scope5_id, "__tests__/template.marko_5_item#2", 1, _filled_guard($scope0_reason, 4), "item");
				_scope($scope5_id, { item }, "__tests__/template.marko", "11:4", { item: "11:8" });
			}, 0, $scope1_id, "#text/2", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_5*shell", $scope0_reason, 4);
			_if(() => {
				if (input.nested) {
					const $scope6_id = _scope_id();
					_html("<u>nested</u>");
					_script($scope6_id, "__tests__/template.marko_6", 0);
					_write_if($scope0_reason, 5) && _scope($scope6_id, {}, "__tests__/template.marko", "15:4");
					return 0;
				}
			}, $scope1_id, "#text/3", 1, _write_guard($scope0_reason, 5), void 0, void 0, void 0, ["__tests__/template.marko_6*shell"], $scope0_reason, 5);
			_set_scope_reason(0);
			const $childScope3 = _patch_child($scope1_id, "#childScope/4", 2);
			wrap_default({ body: attrTag({ content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html("<em>content</em>");
				_for_of(input.items, (item) => {
					const $scope7_id = _scope_id();
					_filled_guard($scope0_reason, 4) && _patch_write($scope7_id, "PatchMarkedWrite:item", item, !$sg__input_items);
					_script($scope7_id, "__tests__/template.marko_7_item#1", 0, _filled_guard($scope0_reason, 4), "item");
					_scope($scope7_id, { item }, "__tests__/template.marko", "23:8", { item: "23:12" });
				}, 0, $scope2_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_7*shell", $scope0_reason, 4);
				_script($scope2_id, "__tests__/template.marko_2");
				$cg__input_items && _patch_init($scope2_id, "__tests__/template.marko_2_input_items#0:6/init");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_items__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "20:6"));
			}, $scope1_id) }) });
			_patch_child_end();
			_dynamic_tag($scope1_id, "#text/5", input.tag, {}, 34, _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_id = _scope_id();
				const $scope3_reason = _scope_reason();
				const $childScope4 = _patch_child($scope3_id, "#childScope/0", 3);
				inner_default({});
				_patch_child_end();
				_for_of(input.items, (item) => {
					const $scope8_id = _scope_id();
					_filled_guard($scope0_reason, 4) && _patch_write($scope8_id, "PatchMarkedWrite:item", item, !$sg__input_items);
					_script($scope8_id, "__tests__/template.marko_8_item#1", 0, _filled_guard($scope0_reason, 4), "item");
					_scope($scope8_id, { item }, "__tests__/template.marko", "31:6", { item: "31:10" });
				}, 0, $scope3_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_8*shell", $scope0_reason, 4);
				_script($scope3_id, "__tests__/template.marko_3");
				_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, $cg__input_items ? "__tests__/template.marko_3_input_items#0:6/init" : "__tests__/template.marko_3_input_items#0:6/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_items__closures, _scope($scope3_id, {
					_: _write_if($scope0_reason, 2) && _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope4),
					"ClosureSignalIndex:input_items/10": $wi__input_items && 1
				}, "__tests__/template.marko", "28:6"));
			}, $scope1_id, ($scope) => $scope0_page ? [{ input_items: input.items }, { _: $scope($scope0_id) }] : []), 0, _write_guard($scope0_reason, 6), $scope0_reason, 6);
			_script($scope1_id, "__tests__/template.marko_1_count#0:9");
			_script($scope1_id, "__tests__/template.marko_1");
			$cg__input_items && _patch_init($scope1_id, "__tests__/template.marko_1_input_items#0:6/init");
			_client_guard($scope0_reason, 5) && _patch_init($scope1_id, "__tests__/template.marko_1_input_nested#0:7/init");
			_client_guard($scope0_reason, 6) && _patch_init($scope1_id, "__tests__/template.marko_1_input_tag#0:8/init");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2),
				"#childScope/4": _existing_scope($childScope3)
			}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 3);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_items: _write_if($scope0_reason, 1) && input.items,
		input_nested: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.nested,
		input_tag: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 6)) && input.tag,
		count,
		"ClosureScopes:input_items/10": $wi__input_items && $input_items__closures
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_nested: ["input.nested"],
		input_tag: ["input.tag"],
		count: "1:6"
	}) || (_filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.items, !$sg__input_items) : _content_withheld("__tests__/template.marko_3*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/content", input.items)), _filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.nested, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.tag, !_server_guard($scope0_reason, 6)), $cg__input_show && _content_withhold(input.tag));
}, 1);
