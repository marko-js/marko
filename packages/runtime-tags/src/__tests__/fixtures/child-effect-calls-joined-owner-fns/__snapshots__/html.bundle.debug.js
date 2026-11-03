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
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const up = _resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	_set_scope_reason($wg__input_title << 1 | $wg__input_title << 3 | $wg__input_title << 5);
	const $childScope = _peek_scope_id();
	label_view_default({
		a: up,
		b: low,
		flag: true
	});
	_scope($scope0_id, {
		input_title: input.title,
		"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_title: ["input.title"] });
}, 1);
