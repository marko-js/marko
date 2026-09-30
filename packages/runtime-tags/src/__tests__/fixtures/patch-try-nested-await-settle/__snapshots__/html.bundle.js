// template.marko
_shells({
	a0: "a0;D ;<strong> </strong>",
	a1: "a1;D ;<strong> </strong>",
	a2: "a2;D l%;<em> </em><!><!>",
	a3: "a3;D l%;<em> </em><!><!>",
	a4: "a4;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.a, (a) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", a, void 0, $scope0_reason, 1)}</em>`);
			_await($scope2_id, "b", input.b, (b) => {
				const $scope4_id = _scope_id();
				_html(`<strong>${_patch_text($scope4_id, "a", b, void 0, $scope0_reason, 2)}</strong>`);
				_scope($scope4_id, {});
			}, 1, "a0", 1);
			_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a5");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "a6");
		}, 1, "a2", 1);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a7");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a8", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a9", void 0, "a4", 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 1) && input.b,
		g: _unfilled_if($scope0_reason, 2) && $input_b__closures,
		f: _unfilled_if($scope0_reason, 1) && $input_a__closures
	});
}, 1, 0);
