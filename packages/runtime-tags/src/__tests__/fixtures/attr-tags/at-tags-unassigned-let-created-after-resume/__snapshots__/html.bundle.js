// tags/list.marko
var list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item);
	$si__input_item && _scope($scope0_id, {});
});

// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_items = _serialize_if($scope0_reason, 0), $sg__input_items = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_set_serialize_reason($sg__input_items << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content("b0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_scope_id();
			_html("<span>shown</span>");
			$si__input_items && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			$si__input_items && _resume_branch($scope1_id);
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	$si__input_items && _scope($scope0_id, {
		e: show,
		a: _existing_scope($childScope)
	});
	$sg__input_items || $si__input_items && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [1, 2];
	_html(`<button id=add>add</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	child_default({ items });
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		c: items,
		b: _existing_scope($childScope)
	});
}, 1);
