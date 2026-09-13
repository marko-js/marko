// template.marko
_shells({
	a0: "a0;D ;<span id=v> </span>",
	a1: "a1,loading",
	a2: "a2;D ;<span id=v> </span>",
	a3: "a3;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<span id=v>${_patch_text($scope3_id, "a", value, void 0, $scope0_reason, 0)}</span>`);
			_script($scope3_id, "a4");
			_scope($scope3_id, { c: value });
		}, 1, "a2", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("a1", $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { e: $input_promise__closures });
}, 1, 0);
