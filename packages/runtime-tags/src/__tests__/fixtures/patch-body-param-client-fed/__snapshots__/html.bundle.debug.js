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

// tags/list.marko
const $template$1 = "<button>add</button><button>rename</button><ul></ul>";
const $walks$1 = " b b b";
_shells({ "__tests__/tags/list.marko": "__tests__/tags/list.marko !__tests__/tags/list.marko_0; b b ;<button>add</button><button>rename</button><ul></ul>" });
var list_default = _template_patch("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_row = _source_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = [{
		id: "1",
		label: "one"
	}];
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/0")}<button>rename</button>${_el_resume($scope0_id, "#button/1")}<ul>`);
	if ($scope0_page) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "#text/0", input.row, {
			id: item.id,
			label: item.label
		});
		_html("</li>");
		_scope($scope1_id, {
			item_id: $wi__input_row && item?.id,
			item_label: $wi__input_row && item?.label
		}, "__tests__/tags/list.marko", "5:4", {
			item_id: ["item.id", "5:8"],
			item_label: ["item.label", "5:8"]
		});
	}, 0, $scope0_id, "#ul/2", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "__tests__/tags/list.marko_0");
	_patch_value($scope0_id, "__tests__/tags/list.marko_fill1", items, 1);
	$scope0_page ? _scope($scope0_id, {
		input_row: input.row,
		items
	}, "__tests__/tags/list.marko", 0, {
		input_row: ["input.row"],
		items: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/tags/list.marko_fill0", input.row);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks$1);
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope2);
	list_default({ row: attrTag({ content: _content_resume("__tests__/template.marko_1*content", (r) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		card_default({
			label: r.label,
			href: `/x/${r.id}`
		});
		$scope0_page && _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:4");
	}, $scope0_id) }) });
	_html(`<p>${_patch_text($scope0_id, "#text/1", input.title, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", 0);
}, 1);
