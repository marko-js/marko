// tags/one.marko
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_t = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("__tests__/tags/one.marko_1*content", ({ content, t }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__content__OR__t = _write_guard($scope1_reason, 0);
		_dynamic_tag($scope1_id, "#text/0", content, { title: t }, 0, 0, $wg__content__OR__t);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {
			content: _write_if($scope1_reason, 2) && content,
			t: _write_if($scope1_reason, 1) && t
		}, "__tests__/tags/one.marko", "1:2", {
			content: "1:16",
			t: "1:25"
		});
	}, $scope0_id) };
	_set_scope_reason($wg__input_content__OR__input_t << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	Wrap.content({
		content: input.content,
		t: input.t
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/one.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_y = _write_guard($scope0_reason, 0), $wi__input_y = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	let s = "a";
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	one_default({
		t: s,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "#text/0", input.y, $wg__input_y * 2)}`);
			_subscribe($wi__input_y && $input_y__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_y#0:4/subscribe", $wg__input_y);
			$wg__input_y || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_y: input.y,
		s,
		"ClosureScopes:input_y/6": $wi__input_y && $input_y__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_y: ["input.y"],
		s: "1:6"
	});
}, 1);
