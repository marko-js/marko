// tags/field.marko
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_uid__OR__input_heading = _write_guard($scope0_reason, 0), $wg__input_uid = _write_guard($scope0_reason, 2), $wg__input_name = _write_guard($scope0_reason, 3), $wg__input_content = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const uid = input.uid || _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "b", input.name, $wg__input_name)}</label>${_el_resume($scope0_id, "a", $wg__input_uid)}<input${_attr("id", uid)}${_attr("aria-describedby", input.heading)}>${_el_resume($scope0_id, "c", $wg__input_uid__OR__input_heading)}`);
	_dynamic_tag($scope0_id, "d", input.content, {}, 0, 0, $wg__input_content);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {});
});

// tags/forward.marko
var forward_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</section><aside>");
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content);
	_html("</aside>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/leaf.marko
var leaf_default = _template("d", (input) => {
	_scope_reason();
	_scope_id();
	_scope_id();
	field_default({ name: "nested" });
});

// tags/nested.marko
var nested_default = _template("e", (input) => {
	_scope_reason();
	_scope_id();
	leaf_default({});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_flip = _write_if($scope0_reason, 1), $wg__input_flip = _write_guard($scope0_reason, 1), $wg__input_items = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const Item = { content: _content("a0", ({ name }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__name = _write_guard($scope1_reason, 0);
		_set_scope_reason($wg__name << 3 | $wg__name << 7);
		const $childScope = _peek_scope_id();
		field_default({ name });
		_write_if($scope1_reason, 0) && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	const Content = { content: _content("a1", ({ item: items }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__items = _write_guard($scope4_reason, 0), $wi__items = _write_if($scope4_reason, 0);
		_for_of(items, (item) => {
			const $scope5_id = _scope_id();
			_dynamic_tag($scope5_id, "a", item, {}, 0, 0, $wg__items);
			$wi__items && _scope($scope5_id, {});
		}, 0, $scope4_id, "a", $wg__items, $wg__items);
		$wi__items && _scope($scope4_id, {});
	}, $scope0_id) };
	_if(() => {
		if (input.flip) {
			const $scope2_id = _scope_id();
			Item.content({ name: "first" });
			$wi__input_flip && _scope($scope2_id, {});
			return 0;
		} else {
			const $scope3_id = _scope_id();
			Item.content({ name: "other" });
			$wi__input_flip && _scope($scope3_id, {});
			return 1;
		}
	}, $scope0_id, "a", $wg__input_flip, $wg__input_flip);
	_dynamic_tag($scope0_id, "b", input.flip ? field_default : "section", { name: "dynamic" }, _content_resume("a2", () => {
		_scope_id();
		_scope_reason();
		field_default({ name: "content" });
	}, $scope0_id), 0, $wg__input_flip);
	_set_scope_reason($wg__input_items << 1);
	let $item;
	forOf(input.items, (item) => {
		$item = attrTags($item, { content: _content("a3", () => {
			const $scope7_reason = _scope_reason(), $wg__item_key = _write_guard($scope7_reason, 0);
			const $scope7_id = _scope_id();
			_set_scope_reason($wg__item_key << 3 | $wg__item_key << 7);
			const $childScope2 = _peek_scope_id();
			field_default({ name: item.key });
			_write_if($scope7_reason, 0) && _scope($scope7_id, { a: _existing_scope($childScope2) });
		}, $scope0_id) });
	});
	const $childScope3 = _peek_scope_id();
	Content.content({ item: $item });
	forward_default({ content: _content("a4", () => {
		_scope_reason();
		_scope_id();
		field_default({ name: "forwarded" });
	}, $scope0_id) });
	nested_default({});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { c: _write_if($scope0_reason, 2) && _existing_scope($childScope3) });
}, 1);
