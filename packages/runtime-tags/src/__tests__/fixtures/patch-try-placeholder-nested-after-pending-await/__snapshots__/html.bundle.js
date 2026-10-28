// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1,<i>inner</i>",
	a2: "a2;D ;<p> </p>",
	a3: "a3,<i>outer</i>",
	a4: "a4;D ;<span> </span>",
	a5: "a5;b%;<!><!><!>",
	a6: "a6;D ;<p> </p>",
	a7: "a7;b%b%;<!><!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 2), $wi__input_b = _write_if($scope0_reason, 2), $cg__input_a = _client_guard($scope0_reason, 1), $wi__input_a__OR__input_b = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.a, (a) => {
			const $scope4_id = _scope_id();
			_html(`<p>${_text_resume($scope4_id, "a", a, 1, $scope0_reason, 1)}</p>`);
			_scope($scope4_id, {});
		}, 1, "a2", _unfilled_if($scope0_reason, 1) && 2, 1);
		_try($scope1_id, "b", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.b, (b) => {
				const $scope6_id = _scope_id();
				_html(`<span>${_text_resume($scope6_id, "a", b, 1, $scope0_reason, 2)}</span>`);
				_scope($scope6_id, {});
			}, 1, "a0", _unfilled_if($scope0_reason, 2) && 2, 1);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_b ? "a8" : "a9");
			$wi__input_b && _subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_b && "a9", 0);
			$wi__input_b && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("<i>inner</i>");
		}, void 0, "a1", void 0, "a5", 1, 0, 2);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_a ? "a10" : "a11");
		$wi__input_a__OR__input_b && _subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_a && "a11", 0);
		$wi__input_a__OR__input_b && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>outer</i>");
	}, void 0, "a3", void 0, "a7", 1, 0, 2);
	_html("</main>");
	_scope($scope0_id, {
		g: $wi__input_b && _unfilled_if($scope0_reason, 2) && $input_b__closures,
		f: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_a__closures
	});
}, 1);
