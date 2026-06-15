// tags/hello/index.marko
var hello_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $sg__input_item);
		_serialize_if($scope0_reason, 1) && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item);
	_dynamic_tag($scope0_id, "b", input.other, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	let $item;
	forIn({
		a: 1,
		b: 2
	}, (a, v) => {
		$item = attrTags($item, { content: _content("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(a)}${_el_resume($scope1_id, "a")}:<!>${_escape(v)}${_el_resume($scope1_id, "b")}`);
			writeScope($scope1_id, {});
		}) });
	});
	hello_default({
		item: $item,
		other: attrTag({ content: _content("a1", () => {
			_scope_reason();
			_scope_id();
			_html("other");
		}) })
	});
}, 1);
