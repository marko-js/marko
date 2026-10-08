// tags/card.marko
const $template$1 = "<a> </a>";
const $walks = " D l";
_shells({ b: "b; D ;<a> </a>" });
var card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attr($scope0_id, "a", "href", input.href, $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}</a>${_el_resume($scope0_id, "a")}`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/feed-list.marko
const $template = "<ul></ul>";
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
_shells({
	c: "c !; ;<ul></ul>",
	c0: /*@__PURE__*/ (() => `c0 c6!c1;${/*@__PURE__*/ ((_w0) => ` D/${_w0}&l`)($walks)};${/*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$1)}`)()
});
var feed_list_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _source_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let hovered = void 0;
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_value($scope1_id, "c2", item?.id);
		_html(`<li${hovered === item.id ? " class=hovered" : ""}>`);
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "b", $childScope);
		card_default({
			label: item.id,
			href: link(input.data, item.id)
		});
		_html(`</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "c1");
		_scope($scope1_id, {
			e: item?.id,
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "c0", $scope0_reason, 1);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_patch_value($scope0_id, "c4", hovered, 1);
	$scope0_page ? _scope($scope0_id, {
		e: $wi__input_items && input.data,
		f: $wi__input_items && hovered
	}) : _filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) || _filled_guard($scope0_reason, 1)) && _patch_value($scope0_id, "c3", input.data);
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a1;${((_w0) => ` b/${_w0}&%c`)(" b")};${((_w0) => `<button>toggle</button>${_w0}<!><!>`)($template)}`)() });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const data = $global().data;
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	feed_list_default({
		items: data.items,
		data
	});
	if ($scope0_page) _if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_fill_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "a2", open, 1);
	$scope0_page && _scope($scope0_id, {
		h: open,
		b: _existing_scope($childScope)
	});
}, 1);
