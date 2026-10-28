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
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 2), $wg__input_suffix = _write_guard($scope0_reason, 4), $wi__input_rows__OR__input_wrap__OR__input_suffix = _write_if($scope0_reason, 1), $wg__input_wrap = _write_guard($scope0_reason, 3), $wi__input_rows = _write_if($scope0_reason, 2), $wi__input_suffix = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_label__closures = new Set();
		_dynamic_tag($scope1_id, "#text/0", input.wrap ? card_default : "div", {}, _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<b>${_text_resume($scope2_id, "#text/0", row.label, $wg__input_rows)}${_text_resume($scope2_id, "#text/1", input.suffix, $wg__input_suffix * 2)}</b>`);
			$wi__input_rows__OR__input_wrap__OR__input_suffix && _subscribe($wi__input_rows && $for_content__row_label__closures, _subscribe($wi__input_suffix && $input_suffix__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"), "__tests__/template.marko_2_input_suffix#0:5/subscribe", $wg__input_rows || $wg__input_suffix), "__tests__/template.marko_2_row_label#1:3/subscribe", $wg__input_rows || $wg__input_suffix);
			$wg__input_rows || $wg__input_suffix || $wi__input_rows__OR__input_wrap__OR__input_suffix && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => [{ input_suffix: input.suffix }, {
			row_label: row?.label,
			_: $scope($scope0_id)
		}]), 0, $wg__input_wrap);
		$wi__input_rows__OR__input_wrap__OR__input_suffix && _scope($scope1_id, {
			row_label: _write_if($scope0_reason, 3) && row?.label,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:row_label/8": $wi__input_rows && $for_content__row_label__closures
		}, "__tests__/template.marko", "3:2", { row_label: ["row.label", "3:6"] });
	}, "id", $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_rows);
	$wi__input_rows__OR__input_wrap__OR__input_suffix && _scope($scope0_id, {
		input_wrap: $wi__input_rows && input.wrap,
		input_suffix: _write_if($scope0_reason, 0) && input.suffix,
		"ClosureScopes:input_suffix/7": $wi__input_suffix && $input_suffix__closures
	}, "__tests__/template.marko", 0, {
		input_wrap: ["input.wrap"],
		input_suffix: ["input.suffix"]
	});
}, 1);
