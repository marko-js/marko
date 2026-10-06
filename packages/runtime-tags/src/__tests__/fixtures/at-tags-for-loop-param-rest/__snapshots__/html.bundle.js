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
	let items = [{
		id: 1,
		extra: "x"
	}, {
		id: 2,
		extra: "y"
	}];
	_html(`<button id=rename>rename</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	let $item;
	forOf(items, ({ id, ...rest }) => {
		$item = attrTags($item, { content: _content("a0", () => {
			const $scope1_reason = _scope_reason(), $wg__id = _write_guard($scope1_reason, 1), $wg__$temp_extra = _write_guard($scope1_reason, 2);
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", id, $wg__id)}:${_text_resume($scope1_id, "b", rest.extra, $wg__$temp_extra * 2)}</p>`);
			_write_if($scope1_reason, 0) && _scope($scope1_id, {});
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item });
	let $item2;
	forOf([["a", "b"], ["c", "d"]], ([first, ...others]) => {
		$item2 = attrTags($item2, { content: _content("a1", () => {
			const $scope2_reason = _scope_reason(), $wg__first = _write_guard($scope2_reason, 1), $wg__$temp2_ = _write_guard($scope2_reason, 2);
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "a", first, $wg__first)}${_text_resume($scope2_id, "b", others[0], $wg__$temp2_ * 2)}</b>`);
			_write_if($scope2_reason, 0) && _scope($scope2_id, {});
		}, $scope0_id) });
	});
	list_default({ item: $item2 });
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		d: items,
		b: _existing_scope($childScope)
	});
}, 1);
