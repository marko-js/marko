// tags/custom-tag/index.marko
var custom_tag_default = _template("__tests__/tags/custom-tag/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_thing_x = _serialize_guard($scope0_reason, 1), $sg__input_thing_content = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { thing: { x, content } } = input;
	_dynamic_tag($scope0_id, "#text/0", content, {}, 0, 0, $sg__input_thing_content);
	_html(`<div>${_text_resume($scope0_id, "#text/1", x, $sg__input_thing_x)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/custom-tag/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { x } = input;
	_set_serialize_reason({
		0: $sg__input_x,
		1: $sg__input_x,
		2: $sg__input_x
	});
	let $thing;
	if (x) {
		$thing = attrTag({
			x: 1,
			content: _content("__tests__/template.marko_1*content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html("Hello");
			}, $scope0_id)
		});
	} else {
		$thing = attrTag({
			x: 2,
			content: _content("__tests__/template.marko_2*content", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html("Goodbye");
			}, $scope0_id)
		});
	}
	const $childScope = _peek_scope_id();
	custom_tag_default({ thing: $thing });
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
