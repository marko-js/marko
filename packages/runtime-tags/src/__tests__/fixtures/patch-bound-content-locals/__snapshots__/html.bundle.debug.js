// tags/list.marko
const $template$1 = "<button>copy</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/list.marko_0"]];
_shells({ "__tests__/tags/list.marko": "__tests__/tags/list.marko !__tests__/tags/list.marko_0; b%;<button>copy</button><!><!>" });
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let items = input.item;
	_html(`<button>copy</button>${_el_mark($scope0_id, "#button/0")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {});
		_scope($scope1_id, {}, "__tests__/tags/list.marko", "3:2");
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/list.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/list.marko_0_items#5/fill", items, 1);
	_scope($scope0_id, { items }, "__tests__/tags/list.marko", 0, { items: "1:6" }) || _client_branch(input.item);
});

// template.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>+</button><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_items = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			let $item;
			forOf(input.items, (item) => {
				$item = attrTags($item, { content: _content_resume("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "#text/0", item.text, _write_guard($scope2_reason, 0))} ${_text_mark($scope2_id, "#text/1", n, 2)}</em>`);
					_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:8"), "__tests__/template.marko_2_n#0:6/subscribe");
				}, $scope1_id, () => [{ item_text: item?.text }]) });
			});
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			list_default({ item: $item });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_items#0:5/setup");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_items && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_items#0:5/setup", "input_items");
	_scope($scope0_id, {
		input_items: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.items,
		n,
		"ClosureScopes:n/8": $n__closures
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		n: "1:6"
	}) || $fg__input_items && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_items", input.items, !_server_guard($scope0_reason, 1));
}, 1);
