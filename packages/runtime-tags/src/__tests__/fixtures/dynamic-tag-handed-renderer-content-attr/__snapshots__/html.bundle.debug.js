// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_c = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.c, {}, 0, 0, $wg__input_c);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_c: input.c }, "__tests__/tags/card.marko", 0, { input_c: ["input.c"] });
});

// tags/one.marko
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_Tag__OR__input_content__OR__input_show = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.Tag, {
		c: input.content,
		show: input.show
	}, 0, 0, $wg__input_Tag__OR__input_content__OR__input_show);
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		input_Tag: _write_if($scope0_reason, 2) && input.Tag,
		input_content: _write_if($scope0_reason, 1) && input.content,
		input_show: _write_if($scope0_reason, 0) && input.show
	}, "__tests__/tags/one.marko", 0, {
		input_Tag: ["input.Tag"],
		input_content: ["input.content"],
		input_show: ["input.show"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 2), $wi__input_x__OR__input_y = _write_if($scope0_reason, 0), $wg__input_x = _write_guard($scope0_reason, 1), $wi__input_y = _write_if($scope0_reason, 2), $wi__input_x = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	_set_scope_reason($wg__input_x << 3 | $wg__input_x << 5 | $wg__input_x << 7);
	const $childScope = _peek_scope_id();
	one_default({
		Tag: card_default,
		show: input.x === 1,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "#text/0", input.y, $wg__input_y * 2)}`);
			$wi__input_x__OR__input_y && _subscribe($wi__input_y && $input_y__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_y#0:4/subscribe", $wg__input_y);
			$wg__input_y || $wi__input_x__OR__input_y && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	$wi__input_x__OR__input_y && _scope($scope0_id, {
		input_y: $wi__input_x && input.y,
		"ClosureScopes:input_y/5": $wi__input_y && $input_y__closures,
		"#childScope/0": $wi__input_x && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_y: ["input.y"] });
}, 1);
