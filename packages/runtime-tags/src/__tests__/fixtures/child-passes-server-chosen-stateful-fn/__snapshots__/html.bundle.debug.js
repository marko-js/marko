// tags/label-view.marko
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label-view.marko_0_input#2");
	_scope($scope0_id, { input }, "__tests__/tags/label-view.marko", 0, { input: 0 });
});

// tags/mid.marko
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	label_view_default({ get: input.get });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/mid.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const up = _resume(() => "U" + input.title + n, "__tests__/template.marko_0/up", $scope0_id);
	const low = _resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	mid_default({ get: input.upper ? up : low });
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		input_upper: input.upper,
		n,
		up: _write_if($scope0_reason, 0) && up,
		low,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_upper: ["input.upper"],
		n: "1:6",
		up: "2:8",
		low: "3:8"
	});
}, 1);
