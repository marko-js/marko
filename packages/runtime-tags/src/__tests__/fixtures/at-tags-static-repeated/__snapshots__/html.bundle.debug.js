// tags/list/index.marko
var list_default = _template("__tests__/tags/list/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
		$si__input_item && writeScope($scope1_id, {}, "__tests__/tags/list/index.marko", "1:1");
	}, 0, $scope0_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item, 0, 0, 1);
	$si__input_item && writeScope($scope0_id, {}, "__tests__/tags/list/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	list_default({ item: attrTags(attrTag({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("Hello");
	}) }), { content: _content("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("Again");
	}) }) });
}, 1);
