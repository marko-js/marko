// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_upper = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const up = _resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	const pick = input.upper ? up : low;
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_pick#8");
	_scope($scope0_id, {
		input_title: input.title,
		input_upper: _write_if($scope0_reason, 0) && input.upper,
		up: $wi__input_upper && up,
		low: $wi__input_upper && low,
		pick
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_upper: ["input.upper"],
		up: "1:8",
		low: "2:8",
		pick: "3:8"
	});
}, 1);
