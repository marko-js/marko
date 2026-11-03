// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_upper = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	const pick = input.upper ? up : low;
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		d: input.title,
		e: _write_if($scope0_reason, 0) && input.upper,
		f: $wi__input_upper && up,
		g: $wi__input_upper && low,
		i: pick
	});
}, 1);
