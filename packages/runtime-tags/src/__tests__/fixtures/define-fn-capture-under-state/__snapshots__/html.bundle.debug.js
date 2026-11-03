// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0), $wg__input_a = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	let show = true;
	const Show = { content: _content("__tests__/template.marko_1*content", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__v = _write_guard($scope1_reason, 0), $wi__v = _write_if($scope1_reason, 0);
		const f = _resume(function() {
			return v;
		}, "__tests__/template.marko_1/f", $scope1_id);
		_if(() => {
			if (input.x) {
				const $scope3_id = _scope_id();
				_html(`<span>${_text_resume($scope3_id, "#text/0", f(), $wg__v)}</span>`);
				($wi__input_x || $wi__v) && _scope($scope3_id, { _: $wi__v && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_x || $wg__v, $wg__input_x, 0, 0, 1);
		_subscribe($wi__input_x && $input_x__closures, _scope($scope1_id, {
			v: $wi__input_x && v,
			f: $wi__input_x && f,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			v: "2:16",
			f: "3:10"
		}), "__tests__/template.marko_1_input_x#0:4/subscribe", $wg__input_x);
		$wg__input_x || _resume_branch($scope1_id);
	}, $scope0_id) };
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope2_id = _scope_id();
			_set_scope_reason($wg__input_a << 1);
			const $childScope = _peek_scope_id();
			Show.content({ v: input.a });
			_scope($scope2_id, { "#childScope/0": _write_if($scope0_reason, 1) && _existing_scope($childScope) }, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_x: input.x,
		input_a: input.a,
		show,
		"ClosureScopes:input_x/7": $wi__input_x && $input_x__closures
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		input_a: ["input.a"],
		show: "1:6"
	});
}, 1);
