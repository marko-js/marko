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
	let out = "";
	let show = true;
	let items = ["a", "b"];
	_html(`<button id=rename>rename</button>${_el_resume($scope0_id, "a")}<div id=out>${_text_resume($scope0_id, "b", out)}</div>`);
	_set_serialize_reason(2);
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button class=direct>direct</button>${_el_resume($scope1_id, "a")}`);
			{
				const $scope2_id = _scope_id();
				_html(`<button class=nested>nested</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}
			_script($scope1_id, "a1");
			_scope($scope1_id, {
				c: item,
				_: _scope_with_id($scope0_id)
			});
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: show,
		f: items,
		c: _existing_scope($childScope)
	});
}, 1);
