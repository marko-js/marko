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
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 2), $wg__input_note = _write_guard($scope0_reason, 4), $wi__input_rows__OR__input_on__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 3), $wi__input_rows = _write_if($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_label__closures = new Set();
		_dynamic_tag($scope1_id, "#text/0", input.on ? card_default : "div", {}, _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<em>${_text_resume($scope2_id, "#text/0", input.note, $wg__input_note)} ${_text_resume($scope2_id, "#text/1", row.label, $wg__input_rows * 2)}</em>`);
			$wi__input_rows__OR__input_on__OR__input_note && _subscribe($wi__input_rows && $for_content__row_label__closures, _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:8"), "__tests__/template.marko_2_input_note#0:5/subscribe", $wg__input_rows || $wg__input_note), "__tests__/template.marko_2_row_label#1:3/subscribe", $wg__input_rows || $wg__input_note);
			$wg__input_rows || $wg__input_note || $wi__input_rows__OR__input_on__OR__input_note && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => [{ input_note: input.note }, {
			row_label: row?.label,
			_: $scope($scope0_id)
		}]), 0, $wg__input_on);
		$wi__input_rows__OR__input_on__OR__input_note && _scope($scope1_id, {
			row_label: _write_if($scope0_reason, 3) && row?.label,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:row_label/8": $wi__input_rows && $for_content__row_label__closures
		}, "__tests__/template.marko", "3:4", { row_label: ["row.label", "3:8"] });
	}, "id", $scope0_id, "#main/0", _write_guard($scope0_reason, 0), $wg__input_rows, $wg__input_rows, "</main>");
	$wi__input_rows__OR__input_on__OR__input_note && _scope($scope0_id, {
		input_on: $wi__input_rows && input.on,
		input_note: _write_if($scope0_reason, 0) && input.note,
		"ClosureScopes:input_note/7": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_note: ["input.note"]
	});
}, 1);
