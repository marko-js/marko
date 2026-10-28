// template.marko
function check(fail) {
	if (fail) throw new Error("down");
}
_shells({
	a2: "a2,Unavailable",
	a3: "a3,<p>Ready</p>",
	a: "a !; ;<main></main>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fail = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_fail = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				check(input.fail);
				_html("<p>Ready</p>");
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_fail ? "a0" : "a1");
				$wi__input_show__OR__input_fail && _subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_fail && "a1", 0);
				$wi__input_show__OR__input_fail && _resume_branch($scope2_id);
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("Unavailable");
			}, 0, "a2", "a3", 0, 0, 1);
			$wi__input_show__OR__input_fail && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.fail,
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_fail__closures
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va5", input.fail, !_server_guard($scope0_reason, 2));
}, 1);
