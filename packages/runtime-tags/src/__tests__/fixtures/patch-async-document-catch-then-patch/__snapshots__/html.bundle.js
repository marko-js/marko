// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", v, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a0", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a3", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("<p>oops</p>");
	}, void 0, "a4", "a2");
	_html("</main>");
	$scope0_page && _scope($scope0_id, { e: $input_promise__closures });
}, 1, 0);
