// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let a = 1;
			let b = 2;
			_if(() => {
				if (input.a !== "z") {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_resume($scope2_id, "#text/0", a + b)}</span>`);
					_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, _write_guard($scope0_reason, 2), 0, 0, 1);
			_html(`<button class=b>b</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				a,
				b,
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", {
				a: "2:8",
				b: "3:8"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_a: input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] });
}, 1);
