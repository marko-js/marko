// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>",
	a: "a !a4;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", value, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope2_id, {});
		}, 1, "a0", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a3", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({}) }, 1);
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$scope0_page && _scope($scope0_id, {
		g: n,
		h: $input_promise__closures
	});
}, 1, 0);
