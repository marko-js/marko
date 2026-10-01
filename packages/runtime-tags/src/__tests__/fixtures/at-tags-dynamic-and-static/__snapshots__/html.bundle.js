// tags/hello/index.marko
var hello_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 1), $wg__input_other = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $wg__input_item);
		_write_if($scope0_reason, 1) && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_item, $wg__input_item, $wg__input_item);
	_dynamic_tag($scope0_id, "b", input.other, {}, 0, 0, $wg__input_other);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let $item;
	forIn({
		a: 1,
		b: 2
	}, (a, v) => {
		$item = attrTags($item, { content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html(`${_escape(a)}:${_escape(v)}`);
		}, $scope0_id) });
	});
	hello_default({
		item: $item,
		other: attrTag({ content: _content("a1", () => {
			_scope_reason();
			_scope_id();
			_html("other");
		}, $scope0_id) })
	});
}, 1);
