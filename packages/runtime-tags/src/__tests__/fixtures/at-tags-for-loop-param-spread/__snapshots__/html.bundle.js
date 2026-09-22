// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 1), $sg__input_text = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<p${_attr("title", input.title)}>${_text_resume($scope0_id, "b", input.text, $sg__input_text)}</p>${_el_resume($scope0_id, "a", $sg__input_title)}`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

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

// template.marko
var template_default = _template("a", (input) => {
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
	_html(`<button id=rename>rename</button>${_el_resume($scope0_id, "a")}`);
	const Row = { content: _content("a0", ({ text }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<em>${_text_resume($scope2_id, "a", text, _serialize_guard($scope2_reason, 0))}</em>`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	_set_serialize_reason(2);
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_set_serialize_reason(42);
			const $childScope = _peek_scope_id();
			child_default(item);
			_set_serialize_reason(2);
			const $childScope2 = _peek_scope_id();
			Row.content(item);
			_if(() => {
				{
					const $scope3_id = _scope_id();
					_set_serialize_reason(34);
					const $childScope3 = _peek_scope_id();
					child_default({
						...item,
						title: "over"
					});
					_scope($scope3_id, {
						_: _scope_with_id($scope1_id),
						a: _existing_scope($childScope3)
					});
					return 0;
				}
			}, $scope1_id, "c", 1, 0, 0, 0, 1);
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
		}, $scope0_id) });
	});
	const $childScope4 = _peek_scope_id();
	list_default({ item: $item });
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: show,
		d: items,
		b: _existing_scope($childScope4)
	});
}, 1);
