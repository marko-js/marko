// tags/keeper.marko
var keeper_default = _template("__tests__/tags/keeper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/keeper.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/keeper.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/keeper.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	});
});

// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p = _write_guard($scope0_reason, 0), $wi__input_p = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_dynamic_tag($scope0_id, "#text/0", input.p ? keeper_default : "div", { content: c }, 0, 0, $wg__input_p);
	$wi__input_p && _scope($scope0_id, { c }, "__tests__/tags/card.marko", 0, { c: "2:6" });
	$wg__input_p || $wi__input_p && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 4), $wi__input_on__OR__input_p__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on__OR__input_p = _write_guard($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", { p: input.on && input.p }, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, $wg__input_note)}</em>`);
		$wi__input_on__OR__input_p__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:6"), "__tests__/template.marko_1_input_note#0:6/subscribe", $wg__input_note);
		$wg__input_note || $wi__input_on__OR__input_p__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ input_note: input.note }]), 0, $wg__input_on__OR__input_p);
	_html("</main>");
	$wi__input_on__OR__input_p__OR__input_note && _scope($scope0_id, {
		input_on: _write_if($scope0_reason, 3) && input.on,
		input_p: _write_if($scope0_reason, 2) && input.p,
		input_note: _write_if($scope0_reason, 0) && input.note,
		"ClosureScopes:input_note/7": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_p: ["input.p"],
		input_note: ["input.note"]
	});
}, 1);
