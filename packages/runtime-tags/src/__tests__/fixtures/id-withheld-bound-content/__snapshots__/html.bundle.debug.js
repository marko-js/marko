// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_dynamic_tag($scope0_id, "#text/2", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label__OR__input_on = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_on = _write_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_on__closures = new Set();
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const Inner = { content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			const uid = _id();
			_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_resume($scope2_id, "#text/2", input.label, $wg__input_label)}</label>`);
			$wi__input_label__OR__input_on && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), "__tests__/template.marko_2_input_label#0:3/subscribe", $wg__input_label);
			$wg__input_label || $wi__input_label__OR__input_on && _resume_branch($scope2_id);
		}, $scope1_id) };
		_dynamic_tag($scope1_id, "#text/0", input.on ? Inner : null, {}, 0, 0, $wg__input_on);
		$wi__input_label__OR__input_on && _subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, {
			Inner: $wi__input_on && Inner,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { Inner: "2:11" }), "__tests__/template.marko_1_input_on#0:4/subscribe", $wg__input_on);
		$wg__input_on || $wi__input_label__OR__input_on && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_label__OR__input_on && _scope($scope0_id, {
		input_label: $wi__input_on && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_on/6": $wi__input_on && $input_on__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
