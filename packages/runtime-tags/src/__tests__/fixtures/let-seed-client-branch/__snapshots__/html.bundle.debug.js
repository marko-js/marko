// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			let x = input.v;
			if (x === "a") {
				const $scope2_id = _scope_id();
				_html(`<p>A ${_text_resume($scope2_id, "#text/0", input.w, $wg__input_w * 2)}</p>`);
				_subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4"), "__tests__/template.marko_2_input_w#0:5/subscribe", $wg__input_w);
			} else {
				const $scope3_id = _scope_id();
				_html(`<p>B ${_text_resume($scope3_id, "#text/0", input.w, $wg__input_w * 2)}</p>`);
				_subscribe($wi__input_w && $input_w__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_w/8": $wi__input_w && 1
				}, "__tests__/template.marko", "8:4"), "__tests__/template.marko_3_input_w#0:5/subscribe", $wg__input_w);
			}
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_v: input.v,
		input_w: input.w,
		on,
		"ClosureScopes:input_w/8": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_w: ["input.w"],
		on: "1:6"
	});
}, 1);
