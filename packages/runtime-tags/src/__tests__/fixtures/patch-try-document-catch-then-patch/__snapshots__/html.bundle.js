// template.marko
function boom() {
	throw new Error("boom");
}
_shells({
	a0: "a0;D%b%;<em><!><!></em>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	const $input_boom__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", input.message, void 0, $scope0_reason, 1)}${_patch_text($scope1_id, "b", input.boom ? boom() : "", 2, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a1");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_message__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a1"), _client_guard($scope0_reason, 2) && "a2");
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_patch_text($scope2_id, "a", err.message)}</b>`);
		_scope($scope2_id, {});
	}, void 0, "a3", "a0", 1, 2);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_message__closures,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_boom__closures
	});
}, 1);
