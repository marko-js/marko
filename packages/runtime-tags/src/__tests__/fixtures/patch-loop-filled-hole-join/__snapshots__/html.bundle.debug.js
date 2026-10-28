// tags/feed-list.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/feed-list.marko": "__tests__/tags/feed-list.marko !; ;<ul></ul>",
	"__tests__/tags/feed-list.marko_1*shell": "__tests__/tags/feed-list.marko_1*shell __tests__/tags/feed-list.marko_1_hovered#0:5/init!__tests__/tags/feed-list.marko_1; D D ;<li><a> </a></li>"
});
var feed_list_default = _template("__tests__/tags/feed-list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let hovered = undefined;
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/feed-list.marko_fill2", item?.id);
		_html(`<li${hovered === item.id ? " class=hovered" : ""}><a${_attr("href", link(input.data, item.id), $scope1_id, "#a/1", $scope0_reason, 0)}>${_text_resume($scope1_id, "#text/2", item.id, void 0, $scope0_reason, 1)}</a>${_el_resume($scope1_id, "#a/1", _mask_group($scope0_reason, 0))}</li>${_el_resume($scope1_id, "#li/0")}`);
		_script($scope1_id, "__tests__/tags/feed-list.marko_1");
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "__tests__/tags/feed-list.marko_1_input_data#0:4_item_id#5/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_data", _filled_guard($scope0_reason, 1) && "item_id");
		_scope($scope1_id, {
			item_id: item?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/feed-list.marko", "6:4", { item_id: ["item.id", "6:8"] });
	}, 0, $scope0_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/feed-list.marko_1*shell", $scope0_reason, 1);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	_filled_guard($scope0_reason, 2) && $cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/feed-list.marko_fill0/unpatched", input.data) : $cg__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_data", input.data, 1);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/feed-list.marko_fill1", hovered, 1);
	_scope($scope0_id, {
		input_data: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.data,
		hovered: _write_if($scope0_reason, 1) && hovered
	}, "__tests__/tags/feed-list.marko", 0, {
		input_data: ["input.data"],
		hovered: "4:6"
	});
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=toggle> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)(" b");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&`)(" b")};${((_w0) => `<button class=toggle> </button>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button class=toggle>${_text_resume($scope0_id, "#text/1", open ? "open" : "closed")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/2", 0);
	feed_list_default({
		items: input.items,
		data: input.data
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		open,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
