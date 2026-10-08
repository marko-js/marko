// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a: "a !; ;<main></main>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", Promise.resolve(input.value), () => {
					const $scope3_id = _scope_id();
					_html(`<em>${_patch_text($scope3_id, "a", input.value, void 0, $scope0_reason, 2)}</em>`);
					_client_guard($scope0_reason, 2) && _patch_init($scope3_id, "a4");
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_value__closures, _scope($scope3_id, {
						_: _scope_with_id($scope2_id),
						Cf: 1
					}), _client_guard($scope0_reason, 2) && "a5");
				}, 1, "a0");
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a6");
				$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_value__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "a7", 0);
				$scope0_page && _resume_branch($scope2_id);
			}, () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, void 0, "a8", void 0, "a2");
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a3"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 1) && input.value,
		f: _unfilled_if($scope0_reason, 2) && $input_value__closures
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a9", input.value);
}, 1);
