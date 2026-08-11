// tags/box/index.marko
var box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, ({ content }) => {
		const $scope1_id = _scope_id();
		_html("<div class=item>");
		_dynamic_tag($scope1_id, "a", content, {}, 0, 0, $sg__input_item);
		_html("</div>");
		$si__input_item && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_item, $sg__input_item, $sg__input_item, 0, 1);
	$si__input_item && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	box_default({ item: attrTags(attrTag({ content: _content("a0", () => {
		_scope_reason();
		_scope_id();
		_html("one");
	}, $scope0_id) }), { content: _content("a1", () => {
		_scope_reason();
		_scope_id();
		_html("two");
	}, $scope0_id) }) });
}, 1);
