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
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 1), $wi__input_note__OR__input_on = _write_if($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const Tree = { content: _content("__tests__/template.marko_1*content", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__n = _write_guard($scope1_reason, 0), $wi__n = _write_if($scope1_reason, 0);
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, $wg__input_note)}</em>`);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__n << 1);
				const $childScope = _peek_scope_id();
				Tree.content({ n: n - 1 });
				($wi__input_on || $wi__n) && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": $wi__n && _existing_scope($childScope)
				}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/1", $wg__n, $wg__n);
		($wi__input_note__OR__input_on || $wi__n) && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_note#0:3/subscribe", $wg__input_note || $wg__n);
		$wg__input_note || $wg__n || ($wi__input_note__OR__input_on || $wi__n) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		Tree.content({ n: 1 });
		$wi__input_on && _scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4");
	}, $scope0_id, ($scope) => [{ input_note: input.note }]), 0, $wg__input_on);
	_scope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note/5": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1);
