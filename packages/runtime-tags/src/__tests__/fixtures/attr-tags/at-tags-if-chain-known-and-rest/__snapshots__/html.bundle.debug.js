// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 1), $sg__rest = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { item, ...rest } = input;
	_for_of(item, (it) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", it.content, {}, 0, 0, $sg__input_item);
		_serialize_if($scope0_reason, 1) && _scope($scope1_id, {}, "__tests__/tags/child.marko", "2:2");
	}, 0, $scope0_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item);
	_html(`<p>${_text_resume($scope0_id, "#text/1", Object.keys(rest).join(), $sg__rest)}</p>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mode = 0;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(42);
	let $item;
	let $other;
	if (mode === 0) {
		$item = attrTag({ content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("A");
		}, $scope0_id) });
	} else {
		$other = attrTag({ x: 1 });
	}
	const $childScope = _peek_scope_id();
	child_default({
		item: $item,
		other: $other
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		mode,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { mode: "1:6" });
}, 1);
