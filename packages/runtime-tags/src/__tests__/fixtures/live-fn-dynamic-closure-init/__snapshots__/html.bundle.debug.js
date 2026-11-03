// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $f2__closures = new Set();
	const f = _resume(function() {
		return input.a;
	}, "__tests__/tags/panel.marko_0/f", $scope0_id);
	let out = "";
	_if(() => {
		if (input.y) {
			const $scope1_id = _scope_id();
			forOf([1], (i) => {
				const $scope2_id = _scope_id();
				_html(`<button class=read>${_text_resume($scope2_id, "#text/1", f(), _write_guard($scope0_reason, 0))}</button>${_el_resume($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/tags/panel.marko_2");
				_subscribe($wi__input_a && $f2__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "4:4"), "__tests__/tags/panel.marko_2_f#0:6/subscribe");
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_y, $wg__input_y);
	_html(`<output>${_text_resume($scope0_id, "#text/1", out)}</output>`);
	_scope($scope0_id, {
		input_a: input.a,
		f,
		"ClosureScopes:f/8": $wi__input_a && $f2__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		f: "1:8"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let y = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(8 | _write_guard($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	panel_default({
		a: input.a,
		y
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		y,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { y: "1:6" });
}, 1);
