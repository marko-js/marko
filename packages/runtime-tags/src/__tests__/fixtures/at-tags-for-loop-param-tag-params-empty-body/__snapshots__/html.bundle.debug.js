// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.x;
	return $return;
});

// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item);
	$si__input_item && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let $item;
	forOf(["a", "b"], (item) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			child_default({ x: item });
			_html(`<p>${_text_resume($scope1_id, "#text/1", item)}</p>`);
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:6");
		}, $scope0_id) });
	});
	list_default({ item: $item });
}, 1);
