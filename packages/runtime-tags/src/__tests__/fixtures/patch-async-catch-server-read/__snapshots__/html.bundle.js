// template.marko
_shells({
	a1: "a1;D ;<em> </em>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: "a !;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", value, void 0, $scope0_reason, 1)}</em>`);
			$scope0_page && _scope($scope3_id, {});
		}, 1, "a1", 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_promise ? "a4" : "a5");
		$scope0_page && $wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a5", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.title, $wg__input_title)}</em>`);
		$scope1_page && _subscribe($wi__input_title && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_title);
		$wg__input_title || _resume_branch($scope1_id);
	}, void 0, "a6", "a3", 1);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		d: input.title,
		f: $wi__input_title && $input_title__closures,
		g: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", input.title, !_server_guard($scope0_reason, 0));
}, 1);
