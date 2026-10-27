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
	const $scope0_reason = _scope_reason(), $wi__input_upper = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const up = _resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	const $childScope = _peek_scope_id();
	label_default({ get: input.upper ? up : low });
	_scope($scope0_id, {
		input_title: input.title,
		input_upper: _write_if($scope0_reason, 1) && input.upper,
		up: $wi__input_upper && up,
		low: $wi__input_upper && low,
		"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_upper: ["input.upper"],
		up: "1:8",
		low: "2:8"
	});
}, 1);
