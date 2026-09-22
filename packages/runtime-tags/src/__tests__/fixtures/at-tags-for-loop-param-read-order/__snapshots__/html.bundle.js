// tags/list.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item);
	$si__input_item && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ text: "a" }, { text: "b" }];
	_html(`<button id=rename>rename</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(2);
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", item.text)}|${_text_resume($scope1_id, "b", JSON.stringify(item), 2)}</p>`);
			_scope($scope1_id, {});
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
