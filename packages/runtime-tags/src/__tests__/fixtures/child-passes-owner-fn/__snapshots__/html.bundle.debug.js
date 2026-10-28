// tags/label.marko
var label_default = _template("__tests__/tags/label.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label.marko_0_get#3");
	_scope($scope0_id, { get: input.get }, "__tests__/tags/label.marko", 0, { get: "1:10" });
});

// tags/mid.marko
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	label_default({ get: input.get });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/mid.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const getTitle = _resume(() => input.title, "__tests__/template.marko_0/getTitle", $scope0_id);
	_set_scope_reason($wg__input_title << 1);
	const $childScope = _peek_scope_id();
	mid_default({ get: getTitle });
	_scope($scope0_id, {
		input_title: input.title,
		"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_title: ["input.title"] });
}, 1);
