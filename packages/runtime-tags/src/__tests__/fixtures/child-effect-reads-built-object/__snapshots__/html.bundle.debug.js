// tags/label.marko
var label_default = _template("__tests__/tags/label.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/label.marko_0_input_item#2", 0);
	_scope($scope0_id, { input_item: input.item }, "__tests__/tags/label.marko", 0, { input_item: ["input.item"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const item = { label: input.title };
	const $childScope = _peek_scope_id();
	label_default({ item });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
