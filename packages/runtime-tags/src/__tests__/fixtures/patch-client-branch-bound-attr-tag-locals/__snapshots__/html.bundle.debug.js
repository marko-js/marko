// tags/list.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/list.marko_2*content": "__tests__/tags/list.marko_2*content",
	"__tests__/tags/list.marko": "__tests__/tags/list.marko;b%;<!><!><!>",
	"__tests__/tags/list.marko_1*shell": "__tests__/tags/list.marko_1*shell;b%;<!><!><!>"
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_row = _client_guard($scope0_reason, 1), $wg__input_row__OR__input_tag = _write_guard($scope0_reason, 0), $wi__input_tag = _write_if($scope0_reason, 2), $wi__input_row__OR__input_tag = _write_if($scope0_reason, 0), $sg__input_row = _server_guard($scope0_reason, 1), $wi__input_row = _write_if($scope0_reason, 1), $fg__input_tag = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id(), $ui__input_tag = _unfilled_if($scope0_reason, 2), $fg__input_row = _filled_guard($scope0_reason, 1);
		const $for_content__row_label__closures = new Set();
		$fg__input_row && $ui__input_tag && _patch_write($scope1_id, "PatchMarkedWrite:row_onSelect", row?.onSelect, !$sg__input_row);
		_dynamic_tag($scope1_id, "#text/0", input.tag, { onClick: row.onSelect }, 1, _content_resume("__tests__/tags/list.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(_text_mark($scope2_id, "#text/0", row.label, 2, $scope0_reason, 1));
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/tags/list.marko_2_row_label#1:5/subscribe", $cg__input_row);
			_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__row_label__closures, _scope($scope2_id, { _: $wi__input_row__OR__input_tag && _scope_with_id($scope1_id) }, "__tests__/tags/list.marko", "2:6"), $cg__input_row && "__tests__/tags/list.marko_2_row_label#1:5/subscribe");
		}, $scope1_id, ($scope) => $scope0_page ? [{ row_label: row?.label }] : []), 0, $wg__input_row__OR__input_tag, $scope0_reason, 0, 0, 2, void 0, 0, "__tests__/tags/list.marko_2*content");
		_patch_render($scope1_id, "__tests__/tags/list.marko_1_input_tag#0:4_row_onSelect#3/setup", ((_filled_guard($scope0_reason, 2) ? " >input_tag" : "") + ($fg__input_row ? " row_onSelect" : "")).slice(1), $scope0_reason, 0);
		$wi__input_row__OR__input_tag && _scope($scope1_id, {
			row_onSelect: $wi__input_tag && _unfilled_if($scope0_reason, 0) && row?.onSelect,
			row_label: $wi__input_tag && ($ui__input_tag || _unfilled_if($scope0_reason, 1)) && row?.label,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:row_label/6": $wi__input_row && $for_content__row_label__closures
		}, "__tests__/tags/list.marko", "1:2", {
			row_onSelect: ["row.onSelect", "1:6"],
			row_label: ["row.label", "1:6"]
		});
		$fg__input_row && (_client_branch_if("__tests__/tags/list.marko_2*content", $scope1_id) || $ui__input_tag) && _patch_write($scope1_id, "PatchMarkedWrite:row_label", row?.label, !$sg__input_row) && _patch_subscribers($scope1_id, "__tests__/tags/list.marko_1_row_label#5/subscribers", "row_label");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 1);
	$fg__input_tag && $cg__input_row && _patch_render($scope0_id, "__tests__/tags/list.marko_1_input_tag#0:4/setup", "input_tag");
	_scope($scope0_id, { input_tag: $wi__input_row && _unfilled_if($scope0_reason, 0) && input.tag }, "__tests__/tags/list.marko", 0, { input_tag: ["input.tag"] }) || $fg__input_tag && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 2));
});

// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "#text/2", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": `__tests__/template.marko_2*content|2${_shell_marker([[], []], ["#childScope/0>", $setup$2])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2)}`,
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 3), $cg__input_tag = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $ui__input_tag = _unfilled_if($scope0_reason, 4), $ui__input_items__OR__input_label = _unfilled_if($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 3), $wi__input_tag = _write_if($scope0_reason, 4), $wi__input_items = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_tag__closures = new Set();
	const $input_items__closures = new Set();
	const $input_label__closures = new Set();
	_filled_guard($scope0_reason, 6) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 6)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#6/subscribers", "input_label");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 1);
			card_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 4) << 5);
				let $row;
				forOf(input.items, (item) => $row = attrTags($row, {
					label: item,
					onSelect: _resume_locals(function() {
						console.log(item, input.label);
					}, "__tests__/template.marko_2/onSelect", { "item/10": item }, $scope2_id, 1)
				}));
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
				list_default({
					tag: input.tag,
					row: $row
				});
				_patch_child_end();
				$cg__input_tag && _patch_render($scope2_id, "__tests__/template.marko_2_input_tag#0:4/subscribe");
				_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_items#0:5/subscribe");
				_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_label#0:6/subscribe");
				_patch_render($scope2_id, "__tests__/template.marko_2_input_items#0:5_input_label#0:6/setup", ((_filled_guard($scope0_reason, 5) ? " >>input_items" : "") + (_filled_guard($scope0_reason, 6) ? " >>input_label" : "")).slice(1), $scope0_reason, 1);
				_subscribe(_unfilled_if($scope0_reason, 6) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_items__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_tag__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "2:4"), $cg__input_tag && "__tests__/template.marko_2_input_tag#0:4/subscribe", 0), _client_guard($scope0_reason, 5) && "__tests__/template.marko_2_input_items#0:5/subscribe", 0), _client_guard($scope0_reason, 6) && "__tests__/template.marko_2_input_label#0:6/subscribe", 0);
				_resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 3);
	_scope($scope0_id, {
		input_tag: _write_if($scope0_reason, 3) && ($ui__input_show || $ui__input_tag) && input.tag,
		input_items: _write_if($scope0_reason, 0) && (_unfilled_if($scope0_reason, 0) || $ui__input_items__OR__input_label) && input.items,
		input_label: input.label,
		"ClosureScopes:input_tag/7": $wi__input_tag && $wi__input_tag && ($ui__input_tag || $ui__input_show) && $input_tag__closures,
		"ClosureScopes:input_items/8": $wi__input_items && $wi__input_items && ($ui__input_items__OR__input_label || $ui__input_show) && $input_items__closures,
		"ClosureScopes:input_label/9": _write_if($scope0_reason, 6) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		input_items: ["input.items"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 4)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#4/subscribers", "input_tag"), _filled_guard($scope0_reason, 5) && _patch_write($scope0_id, "PatchMarkedWrite:input_items", input.items, !_server_guard($scope0_reason, 5)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_items#5/subscribers", "input_items"));
}, 1);
