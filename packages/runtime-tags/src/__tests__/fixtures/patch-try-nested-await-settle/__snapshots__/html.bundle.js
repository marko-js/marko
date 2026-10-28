// template.marko
_shells({
	a0: "a0;D ;<strong> </strong>",
	a1: "a1,<i>loading</i>",
	a2: "a2;D ;<strong> </strong>",
	a3: "a3;D l%;<em> </em><!><!>",
	a4: "a4;D l%;<em> </em><!><!>",
	a5: "a5;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 2), $cg__input_a = _client_guard($scope0_reason, 1), $wi__input_a__OR__input_b = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.a, (a) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_text_resume($scope2_id, "a", a, void 0, $scope0_reason, 1)}</em>`);
			_await($scope2_id, "b", input.b, (b) => {
				const $scope4_id = _scope_id();
				_html(`<strong>${_text_resume($scope4_id, "a", b, void 0, $scope0_reason, 2)}</strong>`);
				_scope($scope4_id, {});
			}, 1, "a0", 1);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_b ? "a6" : "a7");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _scope($scope2_id, {}), $cg__input_b && "a7");
		}, 1, "a3", 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_a ? "a8" : "a9");
		$wi__input_a__OR__input_b && _subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_a && "a9", 0);
		$wi__input_a__OR__input_b && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a1", void 0, "a5", 1, void 0, 2);
	_html("</main>");
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_b__closures,
		f: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_a__closures
	});
}, 1);
