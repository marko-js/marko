// tags/view.marko
var view_default = _template("__tests__/tags/view.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $wg__input_title = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html(`<span>${_text_resume($scope0_id, "#text/1", input.title, $wg__input_title)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/view.marko", 0);
});

// tags/pick.marko
var pick_default = _template("__tests__/tags/pick.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_a__OR__input_b__OR__input_title = _write_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_on__OR__input_a__OR__input_b__OR__input_title << 1 | _write_guard($scope0_reason, 3) << 3 | _write_guard($scope0_reason, 5) << 5);
	const $childScope = _peek_scope_id();
	view_default({
		content: input.on ? input.a : input.b,
		title: input.title
	});
	_write_if($scope0_reason, 4) && _scope($scope0_id, {
		input_on: _write_if($scope0_reason, 2) && input.on,
		input_a: _write_if($scope0_reason, 1) && input.a,
		input_b: _write_if($scope0_reason, 0) && input.b,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/pick.marko", 0, {
		input_on: ["input.on"],
		input_a: ["input.a"],
		input_b: ["input.b"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 3), $wi__input_on__OR__input_x = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_x = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	const $s__closures = new Set();
	let s = 0;
	_html(`<button>s</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason($wg__input_on << 1 | $wg__input_on << 3 | $wg__input_on << 7 | _write_guard($scope0_reason, 1) << 9 | _write_guard($scope0_reason, 4) << 11);
	const $childScope = _peek_scope_id();
	pick_default({
		on: input.on,
		title: input.title,
		a: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "#text/0", input.x, $wg__input_x * 2)}`);
			$wi__input_on__OR__input_x && _subscribe($wi__input_x && $input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_1_input_x#0:5/subscribe", $wg__input_x);
			$wg__input_x || $wi__input_on__OR__input_x && _resume_branch($scope1_id);
		}, $scope0_id) }),
		b: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`B${_text_resume($scope2_id, "#text/0", s, 2)}`);
			_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"), "__tests__/template.marko_2_s#0:7/subscribe");
		}, $scope0_id) })
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_x: _write_if($scope0_reason, 2) && input.x,
		s,
		"ClosureScopes:input_x/8": $wi__input_x && $input_x__closures,
		"ClosureScopes:s/9": $s__closures,
		"#childScope/1": _write_if($scope0_reason, 1) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		s: "1:6"
	});
}, 1);
