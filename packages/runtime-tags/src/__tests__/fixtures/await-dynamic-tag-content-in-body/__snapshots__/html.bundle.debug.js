// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_await($scope0_id, "#text/0", input.p, (x) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, _content_resume("__tests__/tags/card.marko_2*content", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html("<i>x</i>");
		}, $scope1_id), 0, $wg__input_content);
		$wi__input_content && _subscribe($input_content__closures, _scope($scope1_id, {}, "__tests__/tags/card.marko", "1:2"), "__tests__/tags/card.marko_1_input_content#0:4/subscribe", $wg__input_content);
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $wg__input_content);
	$wi__input_content && _scope($scope0_id, { "ClosureScopes:input_content/5": $input_content__closures }, "__tests__/tags/card.marko", 0);
});

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

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 4), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 3), $wi__input_on = _write_if($scope0_reason, 3), $wi__input_note = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_on__closures = new Set();
	_html("<main>");
	const $childScope = _peek_scope_id();
	card_default({
		p: input.p,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.on ? keeper_default : "div", {}, _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<em>${_text_resume($scope2_id, "#text/0", input.note, $wg__input_note)}</em>`);
				$wi__input_on__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:8"), "__tests__/template.marko_2_input_note#0:5/subscribe", $wg__input_note);
				$wg__input_note || $wi__input_on__OR__input_note && _resume_branch($scope2_id);
			}, $scope1_id, ($scope) => [{ input_note: input.note }, { _: $scope($scope0_id) }]), 0, $wg__input_on);
			$wi__input_on__OR__input_note && _subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_1_input_on#0:4/subscribe", $wg__input_on);
			$wg__input_on || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html("</main>");
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		input_note: $wi__input_on && input.note,
		"ClosureScopes:input_note/7": $wi__input_note && $input_note__closures,
		"ClosureScopes:input_on/6": $wi__input_on && $input_on__closures,
		"#childScope/0": _write_if($scope0_reason, 2) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1);
