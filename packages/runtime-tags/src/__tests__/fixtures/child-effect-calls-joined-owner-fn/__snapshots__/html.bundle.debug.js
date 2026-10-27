// tags/label-view.marko
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const get = input.flag ? input.a : input.b;
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label-view.marko_0_get#7");
	_scope($scope0_id, {
		input_flag: _write_if($scope0_reason, 2) && input.flag,
		input_a: _write_if($scope0_reason, 1) && input.a,
		input_b: _write_if($scope0_reason, 0) && input.b,
		get
	}, "__tests__/tags/label-view.marko", 0, {
		input_flag: ["input.flag"],
		input_a: ["input.a"],
		input_b: ["input.b"],
		get: "1:8"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const low = _resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	_set_scope_reason(34 | _write_guard($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	label_view_default({
		a: _resume(() => "x" + n, "__tests__/template.marko_0/a", $scope0_id),
		b: low,
		flag: false
	});
	_html(`<button>more</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		n: "1:6"
	});
}, 1);
