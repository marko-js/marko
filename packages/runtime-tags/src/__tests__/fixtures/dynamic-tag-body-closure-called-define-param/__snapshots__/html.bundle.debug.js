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
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 1), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_on__closures = new Set();
	const Note = { content: _content("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0);
		_if(() => {
			if (input.on) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", label, $wg__label)} ${_text_resume($scope2_id, "#text/1", input.note, $wg__input_note * 2)}</em>`);
				($wi__input_on__OR__input_note || _write_if($scope1_reason, 0)) && _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_2_input_note#0:4/subscribe", $wg__input_note || $wg__label);
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_on || $wg__label, $wg__input_on, 0, 0, 1);
		$wi__input_on__OR__input_note && _subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, {
			label: $wi__input_on && label,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { label: "2:16" }), "__tests__/template.marko_1_input_on#0:3/subscribe", $wg__input_on);
		$wg__input_on || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		Note.content({ label: "x" });
		$wi__input_on && _scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4");
	}, $scope0_id, ($scope) => [{
		input_note: input.note,
		input_on: input.on
	}]), 0, $wg__input_on);
	$wi__input_on__OR__input_note && _scope($scope0_id, {
		input_note: $wi__input_on && input.note,
		"ClosureScopes:input_note/6": $wi__input_note && $input_note__closures,
		"ClosureScopes:input_on/5": $wi__input_on && $input_on__closures
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1);
