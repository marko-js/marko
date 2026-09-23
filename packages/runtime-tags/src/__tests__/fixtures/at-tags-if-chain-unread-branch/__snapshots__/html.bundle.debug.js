// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", it.content, {}, 0, 0, $sg__input_item);
		$si__input_item && _scope($scope1_id, {}, "__tests__/tags/child.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item);
	$si__input_item && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mode = 0;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(2);
	let $item;
	if (mode === 0) {
		$item = attrTag({ content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("A");
		}, $scope0_id) });
	} else {}
	const $childScope = _peek_scope_id();
	child_default({ item: $item });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		mode,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { mode: "1:6" });
}, 1);
