// tags/card.marko
_shells({ b: "b; D ;<a> </a>" });
var card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<a${_patch_attr($scope0_id, "a", "href", input.href, $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}</a>${_el_resume($scope0_id, "a")}`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/list.marko
_shells({ c: "c !c0; b b ;<button>add</button><button>rename</button><ul></ul>" });
var list_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_row = _source_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = [{
		id: "1",
		label: "one"
	}];
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}<button>rename</button>${_el_resume($scope0_id, "b")}<ul>`);
	if ($scope0_page) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "a", input.row, {
			id: item.id,
			label: item.label
		});
		_html("</li>");
		_scope($scope1_id, {
			d: $wi__input_row && item?.id,
			e: $wi__input_row && item?.label
		});
	}, 0, $scope0_id, "c", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c2", items, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.row,
		g: items
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "c1", input.row);
});

// template.marko
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope2);
	list_default({ row: attrTag({ content: _content_resume("a0", (r) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		card_default({
			label: r.label,
			href: `/x/${r.id}`
		});
		$scope0_page && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, $scope0_id) }) });
	_html(`<p>${_patch_text($scope0_id, "b", input.title, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
