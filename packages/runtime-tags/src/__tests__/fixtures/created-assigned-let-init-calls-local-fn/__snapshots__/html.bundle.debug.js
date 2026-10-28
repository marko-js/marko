// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "__tests__/template.marko_1/f");
			let y = f(x);
			_html(`<button>set</button>${_el_resume($scope1_id, "#button/0")}<p>${_text_resume($scope1_id, "#text/1", y + input.w)}</p>`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				y: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { y: "4:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, {
		input_v: _write_if($scope0_reason, 1) && input.v,
		input_w: input.w
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_w: ["input.w"]
	});
}, 1);
