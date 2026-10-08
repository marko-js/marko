// tags/card.marko
const $template$2 = "<a> </a>";
const $walks$2 = " D l";
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko; D ;<a> </a>" });
var card_default = _template_patch("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attr($scope0_id, "#a/0", "href", input.href, $scope0_reason, 0)}>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 1)}</a>${_el_resume($scope0_id, "#a/0")}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/feed-list.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
_shells({
	"__tests__/tags/feed-list.marko": "__tests__/tags/feed-list.marko !; ;<ul></ul>",
	"__tests__/tags/feed-list.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/feed-list.marko_1*shell __tests__/tags/feed-list.marko_1_hovered#0:5/init!__tests__/tags/feed-list.marko_1;${/*@__PURE__*/ ((_w0) => ` D/${_w0}&l`)($walks$2)};${/*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$2)}`)()
});
var feed_list_default = _template_patch("__tests__/tags/feed-list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _source_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let hovered = undefined;
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_value($scope1_id, "__tests__/tags/feed-list.marko_fill2", item?.id);
		_html(`<li${hovered === item.id ? " class=hovered" : ""}>`);
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/1", $childScope);
		card_default({
			label: item.id,
			href: link(input.data, item.id)
		});
		_html(`</li>${_el_resume($scope1_id, "#li/0")}`);
		_script($scope1_id, "__tests__/tags/feed-list.marko_1");
		_scope($scope1_id, {
			item_id: item?.id,
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/tags/feed-list.marko", "6:4", { item_id: ["item.id", "6:8"] });
	}, 0, $scope0_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/feed-list.marko_1*shell", $scope0_reason, 1);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	_patch_value($scope0_id, "__tests__/tags/feed-list.marko_fill1", hovered, 1);
	$scope0_page ? _scope($scope0_id, {
		input_data: $wi__input_items && input.data,
		hovered: $wi__input_items && hovered
	}, "__tests__/tags/feed-list.marko", 0, {
		input_data: ["input.data"],
		hovered: "4:6"
	}) : _filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) || _filled_guard($scope0_reason, 1)) && _patch_value($scope0_id, "__tests__/tags/feed-list.marko_fill0", input.data);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&%c`)(" b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => ` b/${_w0}&%c`)(" b")};${((_w0) => `<button>toggle</button>${_w0}<!><!>`)($template$1)}`)() });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const data = $global$1.data;
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	feed_list_default({
		items: data.items,
		data
	});
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			feed_list_default({
				items: [{ id: "c" }],
				data: { q: "client" }
			});
			_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_fill_global_subscribe("__tests__/template.marko_0_$global_data#6/global", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", open, 1);
	$scope0_page && _scope($scope0_id, {
		open,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { open: "2:6" });
}, 1);
