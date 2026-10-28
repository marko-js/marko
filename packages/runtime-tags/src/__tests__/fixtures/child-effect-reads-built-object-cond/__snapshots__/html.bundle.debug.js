// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_item#3");
	_scope($scope0_id, { input_item: input.item }, "__tests__/tags/child.marko", 0, { input_item: ["input.item"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	child_default({ item: input.flag ? { t: input.title } : { t: "none" } });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_flag: _write_if($scope0_reason, 2) && input.flag,
		input_title: _write_if($scope0_reason, 1) && input.title,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_title: ["input.title"]
	});
}, 1);
