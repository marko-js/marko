// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a: "a !;D%;<main><!></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
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
			_scope($scope3_id, {});
		}, 1, "a0", 1);
		_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "a4");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a5", 0);
		$scope0_page && _resume_branch($scope2_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.title, $wg__input_title)}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3", $wg__input_title);
		$wg__input_title || _resume_branch($scope1_id);
	}, void 0, "a6", "a2");
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		d: input.title,
		f: $input_title__closures,
		g: _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a7", input.title);
}, 1);
