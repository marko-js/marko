// tags/feed-list.marko
const $template = "<ul></ul>";
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
const $setup$1 = [[], []];
_shells({
	b: "b !; ;<ul></ul>",
	b3: "b3 b7!b0; D D ;<li><a> </a></li>"
});
var feed_list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let hovered = void 0;
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "vb1", item?.id);
		_html(`<li${hovered === item.id ? " class=hovered" : ""}><a${_patch_attr($scope1_id, "ab$href", "href", link(input.data, item.id), $scope0_reason, 0)}>${_patch_text($scope1_id, "c", item.id, void 0, $scope0_reason, 1)}</a>${_el_resume($scope1_id, "b", _mask_group($scope0_reason, 0))}</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "b2", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "f");
		$scope0_page && _scope($scope1_id, {
			f: item?.id,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b3", $scope0_reason, 1);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_filled_guard($scope0_reason, 2) && $cg__input_items ? _patch_fill($scope0_id, "vb4", input.data) : $cg__input_items && _patch_write($scope0_id, "xe", input.data, 1);
	_patch_fill($scope0_id, "vb5", hovered, 1);
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.data,
		f: _write_if($scope0_reason, 1) && hovered
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&`)(" b")};${((_w0) => `<button class=toggle> </button>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button class=toggle>${_text_resume($scope0_id, "b", "closed")}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _patch_child($scope0_id, "c");
	feed_list_default({
		items: input.items,
		data: input.data
	});
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		h: open,
		c: _existing_scope($childScope)
	});
}, 1);
