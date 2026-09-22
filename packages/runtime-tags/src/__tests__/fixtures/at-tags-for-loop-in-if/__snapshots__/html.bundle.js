// tags/list.marko
var list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item, "</div>");
	$si__input_item && _scope($scope0_id, {});
});

// tags/labeled-list.marko
var labeled_list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 2), $sg__input_label_text = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.label?.text, $sg__input_label_text)}`);
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $sg__input_item);
		_serialize_if($scope0_reason, 2) && _scope($scope1_id, {});
	}, 0, $scope0_id, "b", $sg__input_item, $sg__input_item, $sg__input_item);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 2;
	let mode = 0;
	_html(`<button id=add>add</button>${_el_resume($scope0_id, "a")}<button id=mode>mode</button>${_el_resume($scope0_id, "b")}`);
	let $item;
	forUntil(3, 0, 1, (i) => {
		$item = attrTags($item, { content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html(`static ${_escape(i)}`);
		}, $scope0_id) });
	});
	list_default({ item: $item });
	_set_serialize_reason(2);
	let $item2;
	forUntil(count, 0, 1, (i) => {
		$item2 = attrTags($item2, { content: _content("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`if ${_text_resume($scope2_id, "a", i, 2)}`);
			_scope($scope2_id, {});
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	list_default({ item: $item2 });
	_set_serialize_reason(2);
	let $item3;
	const $childScope2 = _peek_scope_id();
	list_default({ item: $item3 });
	_set_serialize_reason(2);
	let $item4;
	const $childScope3 = _peek_scope_id();
	list_default({ item: $item4 });
	_set_serialize_reason(2);
	let $item5;
	forUntil(count, 0, 1, (j) => {
		if (j % 2 === mode % 2) $item5 = attrTags($item5, { content: _content("a4", () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html(`for-if ${_text_resume($scope5_id, "a", j, 2)}`);
			_scope($scope5_id, {});
		}, $scope0_id) });
	});
	const $childScope4 = _peek_scope_id();
	list_default({ item: $item5 });
	_set_serialize_reason(42);
	let $label;
	let $item6;
	$label = attrTag({ text: "zero" });
	const $childScope5 = _peek_scope_id();
	labeled_list_default({
		label: $label,
		item: $item6
	});
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		i: count,
		j: mode,
		d: _existing_scope($childScope),
		e: _existing_scope($childScope2),
		f: _existing_scope($childScope3),
		g: _existing_scope($childScope4),
		h: _existing_scope($childScope5)
	});
}, 1);
