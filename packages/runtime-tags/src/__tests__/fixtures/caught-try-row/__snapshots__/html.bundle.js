// template.marko
function check(fail) {
	if (fail) throw new Error("down");
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_fail__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_escape(row.key)}${_text_resume($scope3_id, "b", check(row.fail), $wg__input_rows * 2)}</p>`);
			$wi__input_rows && _subscribe($for_content__row_fail__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_rows);
			$wg__input_rows || $wi__input_rows && _resume_branch($scope3_id);
		}, void 0, () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`Unavailable ${_escape(row.key)}`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
			_resume_branch($scope2_id);
		}, void 0, "a1");
		_scope($scope1_id, {
			M: row?.key,
			g: $wi__input_rows && $for_content__row_fail__closures
		});
	}, "key", $scope0_id, "a", $wg__input_rows, $wg__input_rows, $wg__input_rows, "</main>");
	$wi__input_rows && _scope($scope0_id, {});
}, 1);
