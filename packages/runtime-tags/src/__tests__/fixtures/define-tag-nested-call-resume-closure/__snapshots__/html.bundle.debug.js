// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	const E = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span>${_text_resume($scope1_id, "#text/0", input.x, $wg__input_x)}</span>`);
		_subscribe($wi__input_x && $input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_x#0:4/subscribe", $wg__input_x);
		$wg__input_x || _resume_branch($scope1_id);
	}, $scope0_id) };
	const D = { content: _content("__tests__/template.marko_2*content", ({ on }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__on = _write_guard($scope2_reason, 0), $wi__on = _write_if($scope2_reason, 0);
		_if(() => {
			if (on) {
				const $scope3_id = _scope_id();
				E.content({});
				$wi__on && _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "2:20");
				return 0;
			}
		}, $scope2_id, "#text/0", $wg__on, $wg__on);
		$wi__on && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	let on = false;
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	D.content({ on });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_x: input.x,
		on,
		"ClosureScopes:input_x/6": $wi__input_x && $input_x__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		on: "3:6"
	});
}, 1);
