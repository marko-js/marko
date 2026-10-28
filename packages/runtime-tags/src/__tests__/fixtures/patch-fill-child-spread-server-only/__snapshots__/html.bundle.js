// tags/card.marko
const $template = "<a> </a>";
const $walks = " D l";
const $setup = [[], []];
_shells({ b: "b; D ;<a> </a>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<a${_attr("href", input.href, $scope0_id, "aa$href", $scope0_reason, 0)}>${_text_resume($scope0_id, "b", input.label, 1, $scope0_reason, 1)}</a>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}`);
	_scope($scope0_id, {});
});

// template.marko
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
_shells({
	a: "a; ;<ul></ul>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([["a5"], ["a0"]], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => ` D/${_w0}&l`)($walks)};${/*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const data = $global().data;
	let hovered = void 0;
	_html("<ul>");
	_for_of(data.items, (item) => {
		const $scope1_id = _scope_id();
		_patch_fill($scope1_id, "va1", item?.id);
		_html(`<li${hovered === item.id ? " class=hovered" : ""}>`);
		const $childScope = _peek_scope_id($scope1_id, "b", 0);
		card_default({
			label: item.id,
			href: link(data, item.id)
		});
		_patch_child_end();
		_html(`</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			e: item?.id,
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a2");
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_fill_global_subscribe("a3", $scope0_id);
	_scope($scope0_id, { d: hovered });
}, 1);
