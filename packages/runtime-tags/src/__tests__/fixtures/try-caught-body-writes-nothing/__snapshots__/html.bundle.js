// template.marko
function check(x) {
	if (x) throw new Error("boom");
	return 1;
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_boom = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_boom__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		check(input.boom);
		_html("<em>ok</em>");
		$wi__input_boom && _subscribe($input_boom__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", 0);
		$wi__input_boom && _resume_branch($scope1_id);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "a", err.message, $wg__err_message)}</b>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a1");
	_html("</main>");
	$wi__input_boom && _scope($scope0_id, { e: $input_boom__closures });
}, 1);
