// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", value, void 0, $scope0_owned, 0)}</em>`);
			_scope($scope3_id, {});
		}, 1, "a1", 1);
		$scope0_reason && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$scope0_reason && _resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_elide("a3", (err) => {
		_persisted_reason();
		const $scope2_id = _scope_id();
		_html(`<em>${_text_resume($scope2_id, "a", err.message)}</em>`);
		_scope($scope2_id, {});
	}, $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { e: $input_promise__closures });
}, 1, 0);
