// template.marko
function check(fail) {
	if (fail) throw new Error("down");
}
_shells({
	a3: "a3;D%b%;<p><!><!></p>",
	a: "a; ;<main></main>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_rows = _client_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_fail__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "a", row.key, 1, $scope0_reason, 0)}${_text_resume($scope3_id, "b", check(row.fail), 2, $scope0_reason, 0)}</p>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_rows ? "a0" : "a1");
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_fail__closures, _scope($scope3_id, { _: $wi__input_rows && _scope_with_id($scope1_id) }), $cg__input_rows && "a1");
		}, void 0, () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`Unavailable ${_escape(row.key)}`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
			_resume_branch($scope2_id);
		}, 0, "a2", "a3");
		_scope($scope1_id, {
			M: row?.key,
			g: $wi__input_rows && _unfilled_if($scope0_reason, 0) && $for_content__row_fail__closures
		});
	}, "key", $scope0_id, "a", 1, 1, 1, 0, 0, "a4", $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a")}`);
	_scope($scope0_id, {});
}, 1);
