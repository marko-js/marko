// template.marko
function check(fail) {
	if (fail) throw new Error("down");
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_fail__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_escape(row.key)}${_text_resume($scope3_id, "#text/1", check(row.fail), $wg__input_rows * 2)}</p>`);
			$wi__input_rows && _subscribe($for_content__row_fail__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"), "__tests__/template.marko_3_row_fail#1:4/subscribe", $wg__input_rows);
			$wg__input_rows || $wi__input_rows && _resume_branch($scope3_id);
		}, void 0, () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`Unavailable ${_escape(row.key)}`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:8");
			_resume_branch($scope2_id);
		}, void 0, "__tests__/template.marko_2*content");
		_scope($scope1_id, {
			"#LoopKey": row?.key,
			"ClosureScopes:row_fail/6": $wi__input_rows && $for_content__row_fail__closures
		}, "__tests__/template.marko", "5:4", { "#LoopKey": ["row.key", "5:8"] });
	}, "key", $scope0_id, "#main/0", $wg__input_rows, $wg__input_rows, $wg__input_rows, "</main>");
	$wi__input_rows && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
