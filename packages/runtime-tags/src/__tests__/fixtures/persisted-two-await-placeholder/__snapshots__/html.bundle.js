// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1;D ;<span> </span>",
	a2: "a2,<em>loading</em>",
	a3: "a3;D ;<span> </span>",
	a4: "a4;D ;<span> </span>",
	a5: "a5;b%b%;<!><!><!><!>",
	a: "a;b%;<!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_await($scope1_id, "a", input.a, (a) => {
			const $scope3_id = _scope_id();
			_html(`<span>${_patch_text($scope3_id, "a", a, void 0, $scope0_owned, 1)}</span>`);
			_scope($scope3_id, {});
		}, 1, "a3", 1);
		_await($scope1_id, "b", input.b, (b) => {
			const $scope4_id = _scope_id();
			_html(`<span>${_patch_text($scope4_id, "a", b, void 0, $scope0_owned, 2)}</span>`);
			_scope($scope4_id, {});
		}, 1, "a4", 1);
		$scope0_reason && _subscribe(_source_if($scope0_reason, 2) && $input_b__closures, _subscribe(_source_if($scope0_reason, 1) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		$scope0_reason && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_record("a2", $scope0_id) }) }, 1);
	$scope0_reason && _scope($scope0_id, {
		f: $input_a__closures,
		g: $input_b__closures
	});
}, 1, 0);
