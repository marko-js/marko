// tags/list.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button id=open>open</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.item });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let picked = null;
	_set_scope_reason($wg__input_items << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content_resume("a0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "a", JSON.stringify(item), $wg__input_items)}</span>`);
			$wi__input_items && _scope($scope2_id, {});
		}, $scope0_id, () => [{ 1: item }]) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	_await($scope0_id, "b", resolveAfter(input.items[1]), (v) => {
		const $scope1_id = _scope_id();
		_html(`<button id=pick>pick</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			c: v,
			_: _scope_with_id($scope0_id)
		});
	});
	_html(`<div>${_text_resume($scope0_id, "c", picked)}</div>`);
	_scope($scope0_id, { a: $wi__input_items && _existing_scope($childScope) });
}, 1);
