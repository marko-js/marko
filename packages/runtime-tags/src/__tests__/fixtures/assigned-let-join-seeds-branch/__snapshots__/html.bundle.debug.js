// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			if (y) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "#text/0", input.a, $wg__input_a)}</span>`);
				_write_if($scope0_reason, 0) && _subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_2_input_a#0:4/subscribe", $wg__input_a);
			}
			_html(`<button>${_text_resume($scope1_id, "#text/2", x + input.b)}</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				x: _write_if($scope0_reason, 4) && x,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { x: "2:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 1), $wg__input_show);
	_scope($scope0_id, {
		input_a: _write_if($scope0_reason, 2) && input.a,
		input_b: input.b,
		"ClosureScopes:input_a/6": $wi__input_a && $input_a__closures
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	});
}, 1);
