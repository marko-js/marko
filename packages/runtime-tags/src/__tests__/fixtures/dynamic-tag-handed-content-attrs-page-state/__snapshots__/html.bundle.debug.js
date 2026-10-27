// tags/one.marko
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_t = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, { title: input.t }, 0, 0, $wg__input_content__OR__input_t);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_content: _write_if($scope0_reason, 2) && input.content,
		input_t: _write_if($scope0_reason, 1) && input.t
	}, "__tests__/tags/one.marko", 0, {
		input_content: ["input.content"],
		input_t: ["input.t"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0), $wi__input_y = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	let s = 0;
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason($wg__input_y << 1 | $wg__input_y << 5);
	const $childScope = _peek_scope_id();
	one_default({
		t: input.y,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "#text/0", input.y, $wg__input_y * 2)}`);
			$wi__input_y && _subscribe($input_y__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_y#0:4/subscribe", $wg__input_y);
			$wg__input_y || $wi__input_y && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		s,
		"ClosureScopes:input_y/6": $wi__input_y && $input_y__closures,
		"#childScope/1": $wi__input_y && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { s: "1:6" });
}, 1);
