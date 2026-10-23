// tags/list.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		const $itemcontent_scope = _peek_scope_id();
		let value = _dynamic_tag($scope1_id, "a", item.content, {});
		_var($scope1_id, "b", $itemcontent_scope, "b0");
		_html(`<span>${_text_resume($scope1_id, "c", value)}</span>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_item, $wg__input_item);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button>more</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	let $item;
	forUntil(count, 0, 1, (n) => {
		$item = attrTags($item, { content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			return n * 10;
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: count,
		b: _existing_scope($childScope)
	});
}, 1);
