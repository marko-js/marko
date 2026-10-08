// tags/card.marko
const $template$1 = "<a> </a>";
const $walks$1 = " D l";
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko; D ;<a> </a>" });
var card_default = _template_patch("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attr($scope0_id, "#a/0", "href", input.href, $scope0_reason, 0)}>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 1)}</a>${_el_resume($scope0_id, "#a/0")}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
function link(data, id) {
	return `/?q=${data.q}&sel=${id}`;
}
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; ;<ul></ul>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell __tests__/template.marko_1_hovered#0:5/init!__tests__/template.marko_1;${/*@__PURE__*/ ((_w0) => ` D/${_w0}&l`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$1)}`)()
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const data = $global$1.data;
	let hovered = undefined;
	_html("<ul>");
	_for_of(data.items, (item) => {
		const $scope1_id = _scope_id();
		_patch_value($scope1_id, "__tests__/template.marko_fill1", item?.id);
		_html(`<li${hovered === item.id ? " class=hovered" : ""}>`);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/1", $childScope);
		card_default({
			label: item.id,
			href: link(data, item.id)
		});
		_html(`</li>${_el_resume($scope1_id, "#li/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			item_id: item?.id,
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "7:4", { item_id: ["item.id", "7:8"] });
	}, 0, $scope0_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell");
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_data#4/global", $scope0_id);
	_patch_value($scope0_id, "__tests__/template.marko_fill0", hovered, 1);
	$scope0_page && _scope($scope0_id, { hovered }, "__tests__/template.marko", 0, { hovered: "5:6" });
}, 1);
