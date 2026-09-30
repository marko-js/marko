// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 1), $sg__input_text = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<p${_attr("title", input.title)}>${_text_resume($scope0_id, "#text/1", input.text, $sg__input_text)}</p>${_el_resume($scope0_id, "#p/0", $sg__input_title)}`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
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
	let show = true;
	let items = [{
		text: "a",
		title: "ta"
	}, {
		text: "b",
		title: "tb"
	}];
	_html(`<button id=rename>rename</button>${_el_resume($scope0_id, "#button/0")}`);
	const Row = { content: _content("__tests__/template.marko_2*content", ({ text }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__text = _serialize_guard($scope2_reason, 0);
		_html(`<em>${_text_resume($scope2_id, "#text/0", text, $sg__text)}</em>`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "5:2");
	}, $scope0_id) };
	_set_serialize_reason(2);
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_set_serialize_reason(42);
			const $childScope = _peek_scope_id();
			child_default(item);
			_set_serialize_reason(2);
			const $childScope2 = _peek_scope_id();
			Row.content(item);
			_if(() => {
				if (show) {
					const $scope3_id = _scope_id();
					_set_serialize_reason(34);
					const $childScope3 = _peek_scope_id();
					child_default({
						...item,
						title: "over"
					});
					_scope($scope3_id, {
						_: _scope_with_id($scope1_id),
						"#childScope/0": _existing_scope($childScope3)
					}, "__tests__/template.marko", "13:8");
					return 0;
				}
			}, $scope1_id, "#text/2", 1, 0, 0, 0, 1);
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "10:6");
		}, $scope0_id) });
	});
	const $childScope4 = _peek_scope_id();
	list_default({ item: $item });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		items,
		"#childScope/1": _existing_scope($childScope4)
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		items: "2:6"
	});
}, 1);
