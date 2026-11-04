// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_on = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 1), $wg__input_note = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_on__closures = new Set();
	const Outer = { content: _content("__tests__/template.marko_1*content", ({ v }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__v__closures = new Set();
		const $scope1_reason = _scope_reason(), $wg__v = _write_guard($scope1_reason, 0), $wi__v = _write_if($scope1_reason, 0);
		const Label = { content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<em>${_text_resume($scope2_id, "#text/0", v, $wg__v)}</em>`);
			($wi__input_on || $wi__v) && _subscribe($wi__v && $Outer_content__v__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_2_v#1:3/subscribe", $wg__v);
			$wg__v || ($wi__input_on || $wi__v) && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => [{ v }]) };
		_dynamic_tag($scope1_id, "#text/0", input.on ? card_default : "div", { content: Label }, 0, 0, $wg__input_on);
		($wi__input_on || $wi__v) && _subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, {
			v: $wi__input_on && v,
			Label: $wi__input_on && Label,
			_: $wi__input_on && _scope_with_id($scope0_id),
			"ClosureScopes:v/6": $wi__v && $Outer_content__v__closures
		}, "__tests__/template.marko", "2:2", {
			v: "2:17",
			Label: "3:11"
		}), "__tests__/template.marko_1_input_on#0:3/subscribe", $wg__input_on);
		$wg__input_on || ($wi__input_on || $wi__v) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_note << 1);
	const $childScope = _peek_scope_id();
	Outer.content({ v: input.note });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		"ClosureScopes:input_on/5": $wi__input_on && $input_on__closures,
		"#childScope/0": _write_if($scope0_reason, 2) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0);
}, 1);
