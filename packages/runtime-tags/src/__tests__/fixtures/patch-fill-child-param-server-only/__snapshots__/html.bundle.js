// tags/card.marko
const $template = "<a> </a>";
const $walks = " D l";
_shells({ b: "b; D ;<a> </a>" });
var card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attr($scope0_id, "a", "href", input.href, $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}</a>${_el_resume($scope0_id, "a")}`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
_shells({
	a: "a !; ;<ul></ul>",
	a0: /*@__PURE__*/ (() => `a0 a6!a1;${/*@__PURE__*/ ((_w0) => ` D/${_w0}&l`)($walks)};${/*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template)}`)()
});
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const data = $global().data;
	let hovered = void 0;
	_html("<ul>");
	_for_of(data.items, (item) => {
		const $scope1_id = _scope_id();
		_patch_value($scope1_id, "a2", item?.id);
		_html(`<li${hovered === item.id ? " class=hovered" : ""}>`);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "b", $childScope);
		card_default({
			label: item.id,
			href: link(data, item.id)
		});
		_html(`</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			e: item?.id,
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a0");
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_fill_global_subscribe("a3", $scope0_id);
	_patch_value($scope0_id, "a4", hovered, 1);
	$scope0_page && _scope($scope0_id, { f: hovered });
}, 1);
