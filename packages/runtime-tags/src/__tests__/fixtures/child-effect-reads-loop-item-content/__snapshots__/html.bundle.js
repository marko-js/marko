// tags/shows.marko
var shows_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 0));
	_html(`</div>${_el_resume($scope0_id, "a")}<pre></pre>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, { f: input.content });
});

// tags/first.marko
var first_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const item = [...input.item][0];
	_set_scope_reason($wg__input_item << 1);
	const $childScope = _peek_scope_id();
	shows_default({ content: item.content });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_items << 1);
	let $item;
	forOf(input.items, (x) => {
		$item = attrTags($item, { content: _content_resume("a0", () => {
			const $scope1_reason = _scope_reason(), $wg__x = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "a", x, $wg__x));
			_write_if($scope1_reason, 0) && _scope($scope1_id, {});
		}, $scope0_id, () => [{ 1: x }]) });
	});
	const $childScope = _peek_scope_id();
	first_default({ item: $item });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
