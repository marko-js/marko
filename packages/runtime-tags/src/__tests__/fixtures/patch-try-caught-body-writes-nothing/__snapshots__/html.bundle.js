// template.marko
function check(x) {
	if (x) throw new Error("boom");
	return 1;
}
_shells({
	a0: "a0,<em>ok</em>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_boom = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_boom__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		check(input.boom);
		_html("<em>ok</em>");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "a1");
		$wi__input_boom && _subscribe(_unfilled_if($scope0_reason, 0) && $input_boom__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a2", 0);
		$wi__input_boom && _resume_branch($scope1_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_patch_text($scope2_id, "a", err.message)}</b>`);
		_scope($scope2_id, {});
	}, void 0, "a3", "a0", 1, "");
	_html("</main>");
	$scope0_page && _scope($scope0_id, { e: $wi__input_boom && _unfilled_if($scope0_reason, 0) && $input_boom__closures });
}, 1);
