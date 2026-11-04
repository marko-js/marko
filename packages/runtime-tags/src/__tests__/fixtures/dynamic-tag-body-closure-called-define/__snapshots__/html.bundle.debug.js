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
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 1), $wi__input_note__OR__input_on = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_on = _write_if($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const Note = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, $wg__input_note)}</em>`);
		$wi__input_note__OR__input_on && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_note#0:3/subscribe", $wg__input_note);
		$wg__input_note || $wi__input_note__OR__input_on && _resume_branch($scope1_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		Note.content({});
		$wi__input_on && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
	}, $scope0_id, ($scope) => [{ input_note: input.note }]), 0, $wg__input_on);
	$wi__input_note__OR__input_on && _scope($scope0_id, {
		input_note: $wi__input_on && input.note,
		"ClosureScopes:input_note/5": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1);
