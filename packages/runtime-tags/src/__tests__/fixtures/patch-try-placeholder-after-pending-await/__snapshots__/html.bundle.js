// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1,<i>loading</i>",
	a2: "a2;D ;<p> </p>",
	a3: "a3;D ;<span> </span>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5;D ;<p> </p>",
	a: "a;D%b%;<main><!><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 1), $wi__input_b = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_await($scope0_id, "a", input.a, (a) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", a, 1, $scope0_reason, 0)}</p>`);
		_scope($scope2_id, {});
	}, 1, "a2", _unfilled_if($scope0_reason, 0) && 2, 1);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.b, (b) => {
			const $scope4_id = _scope_id();
			_html(`<span>${_text_resume($scope4_id, "a", b, 1, $scope0_reason, 1)}</span>`);
			_scope($scope4_id, {});
		}, 1, "a0", _unfilled_if($scope0_reason, 1) && 2, 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_b ? "a6" : "a7");
		$wi__input_b && _subscribe(_unfilled_if($scope0_reason, 1) && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_b && "a7", 0);
		$wi__input_b && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a1", void 0, "a4", 1, 0, 2);
	_html("</main>");
	_scope($scope0_id, { g: $wi__input_b && _unfilled_if($scope0_reason, 1) && $input_b__closures });
}, 1);
