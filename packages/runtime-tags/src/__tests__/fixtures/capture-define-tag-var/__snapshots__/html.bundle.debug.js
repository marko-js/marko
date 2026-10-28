// tags/label.marko
var label_default = _template("__tests__/tags/label.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label.marko_0_get#3");
	_scope($scope0_id, { get: input.get }, "__tests__/tags/label.marko", 0, { get: "1:10" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Row = { content: _content("__tests__/template.marko_1*content", ({ text }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $return = text + "!";
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let row = Row.content({ text: input.v });
	$wi__input_v && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_row#6/var");
	const $childScope2 = _peek_scope_id();
	label_default({ get: _resume(function() {
		return row;
	}, "__tests__/template.marko_0/get", $scope0_id) });
	_scope($scope0_id, {
		row,
		"#childScope/0": $wi__input_v && _existing_scope($childScope),
		"#childScope/2": $wi__input_v && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { row: "4:6" });
}, 1);
