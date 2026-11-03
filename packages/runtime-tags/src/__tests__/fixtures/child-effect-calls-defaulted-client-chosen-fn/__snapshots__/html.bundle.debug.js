// tags/label-view.marko
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const fmt = input.fmt ?? _resume(() => "none", "__tests__/tags/label-view.marko_0/fmt");
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label-view.marko_0_fmt#4");
	_scope($scope0_id, { fmt }, "__tests__/tags/label-view.marko", 0, { fmt: "1:8" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let upper = false;
	const up = _resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	const $childScope = _peek_scope_id();
	label_view_default({ fmt: upper ? up : low });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		upper,
		up,
		low,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		upper: "1:6",
		up: "2:8",
		low: "3:8"
	});
}, 1);
