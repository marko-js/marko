// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			const k = y + 1;
			_html(`<span>${_text_resume($scope1_id, "#text/1", input.a, _write_guard($scope0_reason, 2))}</span>${_el_resume($scope1_id, "#span/0")}<button>${_text_resume($scope1_id, "#text/3", x + input.a)}</button>${_el_resume($scope1_id, "#button/2")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_script($scope1_id, "__tests__/template.marko_1_y#6");
			_scope($scope1_id, {
				x: _write_if($scope0_reason, 2) && x,
				y,
				k,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", {
				x: "2:8",
				y: "3:8",
				k: "4:10"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, { input_a: input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] });
}, 1);
