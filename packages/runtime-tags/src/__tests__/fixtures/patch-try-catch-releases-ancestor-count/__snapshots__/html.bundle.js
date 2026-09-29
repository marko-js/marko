// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<b> </b>",
	a2: "a2;D ;<b> </b>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;D ;<em> </em>",
	a5: "a5;b%b%;<!><!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.a, (a) => {
				const $scope5_id = _scope_id();
				_html(`<b>${_patch_text($scope5_id, "a", a, void 0, $scope0_reason, 1)}</b>`);
				_scope($scope5_id, {});
			}, 1, "a1", 1);
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 1) && "a6", 0);
			$scope0_page && _resume_branch($scope2_id);
		}, void 0, (err) => {
			const $scope4_reason = _scope_reason(), $sg__err_message = _source_guard($scope4_reason, 0);
			const $scope4_id = _scope_id();
			_html(`<s>${_text_resume($scope4_id, "a", err.message, $sg__err_message)}</s>`);
			_source_if($scope4_reason, 0) && _scope($scope4_id, {});
		}, void 0, "a7", "a3");
		_await($scope1_id, "b", input.b, (b) => {
			const $scope6_id = _scope_id();
			_html(`<em>${_patch_text($scope6_id, "a", b, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope6_id, {});
		}, 1, "a0", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "a8", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a9", void 0, "a5", 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		f: $input_a__closures,
		g: $input_b__closures
	});
}, 1, 0);
