// tags/box/index.marko
var box_default = _template("__tests__/tags/box/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, ({ content }) => {
		const $scope1_id = _scope_id();
		_html("<div class=item>");
		_dynamic_tag($scope1_id, "#text/0", content, {}, 0, 0, $sg__input_item);
		_html("</div>");
		$si__input_item && writeScope($scope1_id, {}, "__tests__/tags/box/index.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item, 0, 1);
	$si__input_item && writeScope($scope0_id, {}, "__tests__/tags/box/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	box_default({ item: attrTags(attrTag({ content: _content("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("one");
	}) }), { content: _content("__tests__/template.marko_3_content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("two");
	}) }) });
}, 1);
