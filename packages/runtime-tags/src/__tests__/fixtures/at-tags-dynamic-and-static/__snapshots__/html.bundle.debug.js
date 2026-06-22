// tags/hello/index.marko
var hello_default = _template("__tests__/tags/hello/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
		_serialize_if($scope0_reason, 1) && writeScope($scope1_id, {}, "__tests__/tags/hello/index.marko", "1:1");
	}, 0, $scope0_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item, 0, 0, 1);
	_dynamic_tag($scope0_id, "#text/1", input.other, {}, 0, 0, _serialize_guard($scope0_reason, 2));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
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
		$item = attrTags($item, { content: _content("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(a)}${_el_resume($scope1_id, "#text/0")}:<!>${_escape(v)}${_el_resume($scope1_id, "#text/1")}`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "3:8");
		}) });
	});
	hello_default({
		item: $item,
		other: attrTag({ content: _content("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("other");
		}) })
	});
}, 1);
