// tags/tabs.marko
var tabs_default = _template("__tests__/tags/tabs.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const active = [...input.tab].find((t) => t.active);
	_dynamic_tag($scope0_id, "#text/0", active?.content, {}, 0, 0, $wg__input_tab);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/tabs.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 2), $wi__input_x__OR__input_y = _write_if($scope0_reason, 0), $wi__input_y = _write_if($scope0_reason, 2), $wi__input_x = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	const $s__closures = new Set();
	let s = 0;
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	tabs_default({ tab: attrTags(attrTag({
		active: input.x === 1,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "#text/0", input.y, $wg__input_y * 2)}`);
			$wi__input_x__OR__input_y && _subscribe($wi__input_y && $input_y__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_1_input_y#0:5/subscribe", $wg__input_y);
			$wg__input_y || $wi__input_x__OR__input_y && _resume_branch($scope1_id);
		}, $scope0_id)
	}), {
		active: input.x === 2,
		content: _content("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`B${_text_resume($scope2_id, "#text/0", s, 2)}`);
			_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"), "__tests__/template.marko_2_s#0:6/subscribe");
		}, $scope0_id)
	}) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_y: $wi__input_x && input.y,
		s,
		"ClosureScopes:input_y/7": $wi__input_y && $input_y__closures,
		"ClosureScopes:s/8": $s__closures,
		"#childScope/1": $wi__input_x && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_y: ["input.y"],
		s: "1:6"
	});
}, 1);
