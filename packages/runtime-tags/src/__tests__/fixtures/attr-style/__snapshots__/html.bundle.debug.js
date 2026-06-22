// tags/custom-tag.marko
var custom_tag_default = _template("__tests__/tags/custom-tag.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_test = _serialize_guard($scope0_reason, 3), $si__input_test = _serialize_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_style(input.style)}></div>${_el_resume($scope0_id, "#div/0", _serialize_guard($scope0_reason, 2))}`);
	_if(() => {
		if (input.test) {
			const $scope1_id = _scope_id();
			_html(`<div${_attr_style(input.test.style)} id=test>`);
			_dynamic_tag($scope1_id, "#text/1", input.test.content, {}, 0, 0, _serialize_guard($scope0_reason, 5));
			_html(`</div>${_el_resume($scope1_id, "#div/0", _serialize_guard($scope0_reason, 4))}`);
			$si__input_test && writeScope($scope1_id, { _: _serialize_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/custom-tag.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $sg__input_test, $sg__input_test, $sg__input_test, 0, 1, 1);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		input_test_style: $si__input_test && input.test?.style,
		input_test_content: $si__input_test && input.test?.content
	}, "__tests__/tags/custom-tag.marko", 0, {
		input_test_style: ["input.test.style"],
		input_test_content: ["input.test.content"]
	});
});

// template.marko
const TestTag = custom_tag_default;
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_color = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_style({ color: input.color })}></div>${_el_resume($scope0_id, "#div/0", $sg__input_color)}<div style=width:100px></div><div style="color: green"></div>`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_color,
		2: $sg__input_color
	});
	custom_tag_default({ style: { color: input.color } });
	custom_tag_default({ style: { width: "100px" } });
	custom_tag_default({ style: "color: green" });
	_dynamic_tag($scope0_id, "#text/4", TestTag, {
		style: { color: "green" },
		test: attrTag({
			style: { color: "green" },
			content: _content_resume("__tests__/template.marko_1_content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html("Hello");
			}, $scope0_id)
		})
	}, 0, 0, 0);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
