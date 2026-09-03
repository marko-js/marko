// tags/custom-tag.marko
var custom_tag_default = _template("__tests__/tags/custom-tag.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", x)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", input.content, {
		count: x,
		name: input.name
	});
	_script($scope0_id, "__tests__/tags/custom-tag.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		input_name: input.name,
		x
	}, "__tests__/tags/custom-tag.marko", 0, {
		input_content: ["input.content"],
		input_name: ["input.name"],
		x: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	custom_tag_default({
		name: "hello",
		content: _content_resume("__tests__/template.marko_1*content", ({ count, name }) => {
			const $scope1_reason = _scope_reason(), $sg__count = _serialize_guard($scope1_reason, 1), $sg__name = _serialize_guard($scope1_reason, 2);
			const $scope1_id = _scope_id();
			_html(`<div>Count (${_text_resume($scope1_id, "#text/0", name, $sg__name * 2)}): ${_text_resume($scope1_id, "#text/1", count, $sg__count * 2)}</div>`);
			_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
		}, $scope0_id)
	});
}, 1);
