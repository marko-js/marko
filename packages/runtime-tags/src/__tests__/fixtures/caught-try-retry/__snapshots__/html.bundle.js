// template.marko
function check(fail) {
	if (fail) throw new Error("down");
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_fail = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_fail = _write_if($scope0_reason, 2);
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
				$wi__input_show__OR__input_fail && _subscribe($wi__input_fail && $input_fail__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", 0);
				$wi__input_show__OR__input_fail && _resume_branch($scope2_id);
			}, void 0, () => {
				_scope_reason();
				_scope_id();
				_html("Unavailable");
			}, void 0, "a1");
			$wi__input_show__OR__input_fail && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show, $wg__input_show, "</main>");
	$wi__input_show__OR__input_fail && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.fail,
		f: $wi__input_fail && $input_fail__closures
	});
}, 1);
