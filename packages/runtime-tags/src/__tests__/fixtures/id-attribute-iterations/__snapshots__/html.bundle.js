// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "a", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "c", $wg__input_uid__OR__input_heading)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_record__OR__input_end = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const Content = { content: _content("a0", ({ item: items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__items = _write_guard($scope1_reason, 0), $wi__items = _write_if($scope1_reason, 0);
		_for_of(items, (item) => {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", item, {}, 0, 0, $wg__items);
			$wi__items && _scope($scope2_id, {});
		}, 0, $scope1_id, "a", $wg__items, $wg__items);
		$wi__items && _scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason($wg__input_items__OR__input_record__OR__input_end << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content("a1", () => {
			const $scope3_reason = _scope_reason(), $wg__item = _write_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_set_scope_reason($wg__item << 3 | $wg__item << 7);
			const $childScope = _peek_scope_id();
			field_default({ name: item });
			_write_if($scope3_reason, 0) && _scope($scope3_id, { a: _existing_scope($childScope) });
		}, $scope0_id) });
	});
	forIn(input.record, (key, value) => {
		$item = attrTags($item, { content: _content("a2", () => {
			const $scope4_reason = _scope_reason(), $wg__key = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_set_scope_reason($wg__key << 3 | $wg__key << 7);
			const $childScope2 = _peek_scope_id();
			field_default({ name: key });
			_write_if($scope4_reason, 0) && _scope($scope4_id, { a: _existing_scope($childScope2) });
		}, $scope0_id) });
	});
	forTo(input.end, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("a3", () => {
			const $scope5_reason = _scope_reason(), $wg__i = _write_guard($scope5_reason, 0);
			const $scope5_id = _scope_id();
			_set_scope_reason($wg__i << 3 | $wg__i << 7);
			const $childScope3 = _peek_scope_id();
			field_default({ name: i });
			_write_if($scope5_reason, 0) && _scope($scope5_id, { a: _existing_scope($childScope3) });
		}, $scope0_id) });
	});
	forUntil(input.end, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("a4", () => {
			const $scope6_reason = _scope_reason(), $wg__i2 = _write_guard($scope6_reason, 0);
			const $scope6_id = _scope_id();
			_set_scope_reason($wg__i2 << 3 | $wg__i2 << 7);
			const $childScope4 = _peek_scope_id();
			field_default({ name: i });
			_write_if($scope6_reason, 0) && _scope($scope6_id, { a: _existing_scope($childScope4) });
		}, $scope0_id) });
	});
	const $childScope5 = _peek_scope_id();
	Content.content({ item: $item });
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.items,
		e: _write_if($scope0_reason, 1) && input.record,
		f: _write_if($scope0_reason, 0) && input.end,
		a: _existing_scope($childScope5)
	});
}, 1);
