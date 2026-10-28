// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "#text/1", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "#label/0", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "#input/2", $wg__input_uid__OR__input_heading)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_record__OR__input_end = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const Content = { content: _content("__tests__/template.marko_1*content", ({ item: items }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__items = _write_guard($scope1_reason, 0), $wi__items = _write_if($scope1_reason, 0);
		_for_of(items, (item) => {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "#text/0", item, {}, 0, 0, $wg__items);
			$wi__items && _scope($scope2_id, {}, "__tests__/template.marko", "1:35");
		}, 0, $scope1_id, "#text/0", $wg__items, $wg__items);
		$wi__items && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason($wg__input_items__OR__input_record__OR__input_end << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_3*content", () => {
			const $scope3_reason = _scope_reason(), $wg__item = _write_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_set_scope_reason($wg__item << 3 | $wg__item << 7);
			const $childScope = _peek_scope_id();
			field_default({ name: item });
			_write_if($scope3_reason, 0) && _scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:28");
		}, $scope0_id) });
	});
	forIn(input.record, (key, value) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_4*content", () => {
			const $scope4_reason = _scope_reason(), $wg__key = _write_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_set_scope_reason($wg__key << 3 | $wg__key << 7);
			const $childScope2 = _peek_scope_id();
			field_default({ name: key });
			_write_if($scope4_reason, 0) && _scope($scope4_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "4:34");
		}, $scope0_id) });
	});
	forTo(input.end, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_5*content", () => {
			const $scope5_reason = _scope_reason(), $wg__i = _write_guard($scope5_reason, 0);
			const $scope5_id = _scope_id();
			_set_scope_reason($wg__i << 3 | $wg__i << 7);
			const $childScope3 = _peek_scope_id();
			field_default({ name: i });
			_write_if($scope5_reason, 0) && _scope($scope5_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/template.marko", "5:23");
		}, $scope0_id) });
	});
	forUntil(input.end, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_6*content", () => {
			const $scope6_reason = _scope_reason(), $wg__i2 = _write_guard($scope6_reason, 0);
			const $scope6_id = _scope_id();
			_set_scope_reason($wg__i2 << 3 | $wg__i2 << 7);
			const $childScope4 = _peek_scope_id();
			field_default({ name: i });
			_write_if($scope6_reason, 0) && _scope($scope6_id, { "#childScope/0": _existing_scope($childScope4) }, "__tests__/template.marko", "6:26");
		}, $scope0_id) });
	});
	const $childScope5 = _peek_scope_id();
	Content.content({ item: $item });
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		input_items: _write_if($scope0_reason, 2) && input.items,
		input_record: _write_if($scope0_reason, 1) && input.record,
		input_end: _write_if($scope0_reason, 0) && input.end,
		"#childScope/0": _existing_scope($childScope5)
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_record: ["input.record"],
		input_end: ["input.end"]
	});
}, 1);
