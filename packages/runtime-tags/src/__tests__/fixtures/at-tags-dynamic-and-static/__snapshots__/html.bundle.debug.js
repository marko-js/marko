// tags/hello/index.marko
var hello_default = _template("__tests__/tags/hello/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 1), $wg__input_other = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $wg__input_item);
		_write_if($scope0_reason, 1) && _scope($scope1_id, {}, "__tests__/tags/hello/index.marko", "1:1");
	}, 0, $scope0_id, "#text/0", $wg__input_item, $wg__input_item, $wg__input_item);
	_dynamic_tag($scope0_id, "#text/1", input.other, {}, 0, 0, $wg__input_other);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let $item;
	forIn({
		a: 1,
		b: 2
	}, (a, v) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(a)}:${_escape(v)}`);
		}, $scope0_id) });
	});
	hello_default({
		item: $item,
		other: attrTag({ content: _content("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("other");
		}, $scope0_id) })
	});
}, 1);
