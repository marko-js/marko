// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1,<em>inner</em>",
	a2: "a2,<em>outer</em>",
	a3: "a3;D ;<em> </em>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_try($scope1_id, "a", _content_resume("a4", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_await($scope2_id, "a", input.promise, (value) => {
				const $scope5_id = _scope_id();
				_html(`<em>${_patch_text($scope5_id, "a", value, void 0, $scope0_reason, 0)}</em>`);
				_scope($scope5_id, {});
			}, 1, "a3", 1);
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			$scope0_page && _resume_branch($scope2_id);
		}, $scope1_id), { catch: attrTag({ content: _content_shell("a1", $scope1_id) }) }, 1);
		$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { catch: attrTag({ content: _content_shell("a2", $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { e: $input_promise__closures });
}, 1, 0);
