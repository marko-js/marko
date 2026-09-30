// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a: "a; ;<main></main>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.promise, (value) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_patch_text($scope4_id, "a", value, void 0, $scope0_reason, 2)}</em>`);
					_scope($scope4_id, {});
				}, 1, "a0");
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a4");
				$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "a5", 0);
				$scope0_page && _resume_branch($scope2_id);
			}, void 0, (err) => {
				const $scope3_reason = _scope_reason(), $sg__err_message = _source_guard($scope3_reason, 0);
				const $scope3_id = _scope_id();
				_html(`<p>${_text_resume($scope3_id, "a", err.message, $sg__err_message)}</p>`);
				_source_if($scope3_reason, 0) && _scope($scope3_id, {});
			}, void 0, "a6", "a2", void 0, 1);
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a3"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 1) && input.promise,
		f: _unfilled_if($scope0_reason, 2) && $input_promise__closures
	});
}, 1, 0);
