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
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_label__closures = new Set();
		_dynamic_tag($scope1_id, "#text/0", row.card ? card_default : "div", {}, _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<b>${_text_resume($scope2_id, "#text/0", row.label, $wg__input_rows)}</b>`);
			$wi__input_rows && _subscribe($for_content__row_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"), "__tests__/template.marko_2_row_label#1:4/subscribe", $wg__input_rows);
			$wg__input_rows || $wi__input_rows && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => [{ row_label: row?.label }]), 0, $wg__input_rows);
		$wi__input_rows && _scope($scope1_id, { "ClosureScopes:row_label/5": $for_content__row_label__closures }, "__tests__/template.marko", "2:2");
	}, "id", $scope0_id, "#text/0", $wg__input_rows, $wg__input_rows);
	$wi__input_rows && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
