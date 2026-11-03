// tags/one.marko
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_attrs = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, input.attrs, 0, 0, $wg__input_content__OR__input_attrs);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_content: _write_if($scope0_reason, 2) && input.content,
		input_attrs: _write_if($scope0_reason, 1) && input.attrs
	}, "__tests__/tags/one.marko", 0, {
		input_content: ["input.content"],
		input_attrs: ["input.attrs"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let z = 0;
	_html(`<button class=z>z</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason($wg__input_y << 1 | $wg__input_y << 5);
	const $childScope = _peek_scope_id();
	one_default({
		attrs: { title: input.y },
		content: _content_resume("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("A");
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		z,
		"#childScope/1": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { z: "1:6" });
}, 1);
