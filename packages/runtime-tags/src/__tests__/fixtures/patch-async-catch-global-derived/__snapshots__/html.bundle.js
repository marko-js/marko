// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a: "a !a7;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const tag = `${$global().brand}!`;
	let n = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", value, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a0", 1);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a3");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a4", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, void 0, () => {
		_scope_reason();
		const $scope2_page = _page_render();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", tag, $scope2_page)}</p>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
		$scope2_page || _resume_branch($scope2_id);
	}, void 0, "a5", "a2");
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_fill_global_subscribe("a6", $scope0_id);
	_script($scope0_id, "a7");
	_patch_value($scope0_id, "a9", n, 1);
	$scope0_page ? _scope($scope0_id, {
		g: tag,
		j: n,
		k: _unfilled_if($scope0_reason, 0) && $input_promise__closures
	}) : _patch_value($scope0_id, "a8", tag);
}, 1);
