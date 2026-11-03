// tags/keep.marko
var keep_default = _template("__tests__/tags/keep.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button class=reset>reset</button>${_el_resume($scope0_id, "#button/0")}<div>`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_html("</div>");
	_script($scope0_id, "__tests__/tags/keep.marko_0");
	_scope($scope0_id, { input_content: input.content }, "__tests__/tags/keep.marko", 0, { input_content: ["input.content"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_bs = _write_guard($scope0_reason, 0), $wg__input_note = _write_guard($scope0_reason, 1), $wi__input_bs = _write_if($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_for_of(input.bs, (b) => {
		const $scope1_id = _scope_id();
		const $for_content__b__closures = new Set();
		keep_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`${_text_resume($scope2_id, "#text/0", b, $wg__input_bs)}:${_text_resume($scope2_id, "#text/1", input.note, $wg__input_note * 2)}`);
			_subscribe($wi__input_bs && $for_content__b__closures, _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), "__tests__/template.marko_2_input_note#0:4/subscribe", $wg__input_bs || $wg__input_note), "__tests__/template.marko_2_b#1:2/subscribe", $wg__input_bs || $wg__input_note);
			$wg__input_bs || $wg__input_note || _resume_branch($scope2_id);
		}, $scope1_id) });
		_scope($scope1_id, {
			b,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:b/6": $wi__input_bs && $for_content__b__closures
		}, "__tests__/template.marko", "1:2", { b: "1:6" });
	}, 0, $scope0_id, "#text/0", $wg__input_bs, $wg__input_bs);
	_scope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note/5": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1);
