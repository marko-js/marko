// template.marko
function check(x) {
	if (x) throw new Error("boom");
	return 1;
}
_shells({
	a1: "a1",
	a2: "a2,<em>ok</em>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_boom = _client_guard($scope0_reason, 0), $wi__input_boom = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_boom__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		check(input.boom);
		_html("<em>ok</em>");
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a0", $cg__input_boom);
		$wi__input_boom && _subscribe(_unfilled_if($scope0_reason, 0) && $input_boom__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_boom && "a0", 0);
		$wi__input_boom && _resume_branch($scope1_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_text_mark($scope2_id, "a", err.message, 1, 4, 0)}</b>`);
		_scope($scope2_id, {});
	}, 0, "a1", "a2", 1, 1);
	_html("</main>");
	_scope($scope0_id, { e: $wi__input_boom && _unfilled_if($scope0_reason, 0) && $input_boom__closures });
}, 1);
