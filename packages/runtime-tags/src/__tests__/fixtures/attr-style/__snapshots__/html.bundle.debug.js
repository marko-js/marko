// tags/custom-tag.marko
var custom_tag_default = _template("__tests__/tags/custom-tag.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_test_style = _write_guard($scope0_reason, 4), $wg__input_test_content = _write_guard($scope0_reason, 5), $wg__input_test = _write_guard($scope0_reason, 3), $wg__input_style = _write_guard($scope0_reason, 2), $wi__input_test = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_style(input.style)}></div>${_el_resume($scope0_id, "#div/0", $wg__input_style)}`);
	_if(() => {
		if (input.test) {
			const $scope1_id = _scope_id();
			_html(`<div${_attr_style(input.test.style)} id=test>`);
			_dynamic_tag($scope1_id, "#text/1", input.test.content, {}, 0, 0, $wg__input_test_content);
			_html(`</div>${_el_resume($scope1_id, "#div/0", $wg__input_test_style)}`);
			$wi__input_test && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/custom-tag.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_test, $wg__input_test, 0, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_test_style: $wi__input_test && input.test?.style,
		input_test_content: $wi__input_test && input.test?.content
	}, "__tests__/tags/custom-tag.marko", 0, {
		input_test_style: ["input.test.style"],
		input_test_content: ["input.test.content"]
	});
});

// template.marko
const TestTag = custom_tag_default;
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_style({ color: input.color })}></div>${_el_resume($scope0_id, "#div/0", $wg__input_color)}<div style=width:100px></div><div style="color: green"></div><div${input.color ? " style=color:red" : ""}></div>${_el_resume($scope0_id, "#div/1", $wg__input_color)}`);
	_set_scope_reason($wg__input_color << 1 | $wg__input_color << 5);
	const $childScope = _peek_scope_id();
	custom_tag_default({ style: { color: input.color } });
	custom_tag_default({ style: { width: "100px" } });
	custom_tag_default({ style: "color: green" });
	_dynamic_tag($scope0_id, "#text/5", TestTag, {
		style: { color: "green" },
		test: attrTag({
			style: { color: "green" },
			content: _content_resume("__tests__/template.marko_1*content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html("Hello");
			}, $scope0_id)
		})
	}, 0, 0, 0);
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/2": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
