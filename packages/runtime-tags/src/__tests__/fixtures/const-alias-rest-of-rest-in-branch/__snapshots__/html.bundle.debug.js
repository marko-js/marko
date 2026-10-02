// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_o = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_show = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { a, ...r1 } = input.o;
	const { a: $a, b: $b, ...r2 } = r1;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span${_attrs(r2, "#span/0", $scope1_id, "span")}>${_text_resume($scope1_id, "#text/1", r1.b, $wg__input_o)}</span>${_el_resume($scope1_id, "#span/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_r2#0:9");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2", { "EventAttributes:#span/0": ["...r2", "2:49"] });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_html(`<div>${_text_resume($scope0_id, "#text/1", a, $wg__input_o)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		b: $wi__input_show && r1.b,
		r2: $wi__input_show && r2
	}, "__tests__/template.marko", 0, {
		b: "2:25",
		r2: "2:31"
	});
}, 1);
