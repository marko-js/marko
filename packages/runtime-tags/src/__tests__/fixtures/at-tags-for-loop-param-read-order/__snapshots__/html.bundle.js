// tags/list.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $wg__input_item);
		$wi__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_item, $wg__input_item);
	$wi__input_item && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ text: "a" }, { text: "b" }];
	_html(`<button id=rename>rename</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content("a0", () => {
			const $scope1_reason = _scope_reason(), $wg__item_text = _write_guard($scope1_reason, 1), $wg__item = _write_guard($scope1_reason, 2);
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", item.text, $wg__item_text)}|${_text_resume($scope1_id, "b", JSON.stringify(item), $wg__item * 2)}</p>`);
			_write_if($scope1_reason, 0) && _scope($scope1_id, {});
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: items,
		b: _existing_scope($childScope)
	});
}, 1);
