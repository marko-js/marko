// tags/card.marko
const $template$1 = "<a> </a>";
const $walks = " D l";
const $setup$2 = [[], []];
_shells({ b: "b; D ;<a> </a>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attr($scope0_id, "aa$href", "href", input.href, $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}</a>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/feed-list.marko
const $template = "<ul></ul>";
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
const $setup$1 = [[], []];
_shells({
	c: "c !; ;<ul></ul>",
	c3: /*@__PURE__*/ (() => `c3${_shell_marker(_shell_setup([["c7"], ["c0"]], ["b>", $setup$2]))};${/*@__PURE__*/ ((_w0) => ` D/${_w0}&l`)($walks)};${/*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$1)}`)()
});
var feed_list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_items = _write_if($scope0_reason, 1), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let hovered = void 0;
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "vc1", item?.id);
		_html(`<li${hovered === item.id ? " class=hovered" : ""}>`);
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
		const $childScope = _patch_child($scope1_id, "b", 0);
		card_default({
			label: item.id,
			href: link(input.data, item.id)
		});
		_patch_child_end();
		_html(`</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "c0");
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "c2", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "e");
		$scope0_page && _scope($scope1_id, {
			e: item?.id,
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "c3", $scope0_reason, 1);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_filled_guard($scope0_reason, 2) && $cg__input_items ? _patch_fill($scope0_id, "vc4", input.data) : $cg__input_items && _patch_write($scope0_id, "xe", input.data, 1);
	_patch_fill($scope0_id, "vc5", hovered, 1);
	$scope0_page && _scope($scope0_id, {
		e: $wi__input_items && input.data,
		f: $wi__input_items && hovered
	});
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&%c`)(" b")};${((_w0) => `<button>toggle</button>${_w0}<!><!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const data = $global().data;
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _patch_child($scope0_id, "b", 0);
	feed_list_default({
		items: data.items,
		data
	});
	_patch_child_end();
	if ($scope0_page) _if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_fill_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		f: open,
		b: _existing_scope($childScope)
	});
}, 1);
