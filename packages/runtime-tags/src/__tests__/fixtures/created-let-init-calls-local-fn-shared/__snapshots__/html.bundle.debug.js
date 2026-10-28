// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = input.v;
			const f = _resume((v) => v, "__tests__/template.marko_1/f");
			let y = f(x);
			_html(`<p>${_text_resume($scope1_id, "#text/0", y + input.w, $wg__input_w)}</p><span>${_escape(f(x))}</span>`);
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				y: _write_if($scope0_reason, 3) && y,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", { y: "4:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 1), $wg__input_show);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		input_v: input.v,
		input_w: input.w
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_w: ["input.w"]
	});
}, 1);
