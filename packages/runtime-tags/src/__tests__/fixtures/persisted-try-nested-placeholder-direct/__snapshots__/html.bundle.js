// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1,inner",
	a2: "a2,outer",
	a3: "a3;D ;<span> </span>",
	a4: "a4;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a6", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_try($scope1_id, "a", _content_resume("a4", () => {
			const $scope2_id = _scope_id();
			_persisted_reason();
			_await($scope2_id, "a", input.promise, (value) => {
				const $scope6_id = _scope_id();
				_html(`<span>${_patch_text($scope6_id, "a", value, void 0, $scope0_owned, 0)}</span>`);
				_scope($scope6_id, {});
			}, 1, "a3", 1);
			$scope0_reason && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
			$scope0_reason && _resume_branch($scope2_id);
		}, $scope1_id), {
			placeholder: attrTag({ content: _content_record("a1", $scope1_id) }),
			catch: attrTag({ content: _content_elide("a5", (err) => {
				_persisted_reason();
				const $scope5_id = _scope_id();
				_html(`<em>${_text_resume($scope5_id, "a", err.message)}</em>`);
				_scope($scope5_id, {});
			}, $scope1_id) })
		}, 1);
		$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_record("a2", $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { e: $input_promise__closures });
}, 1, 0);
