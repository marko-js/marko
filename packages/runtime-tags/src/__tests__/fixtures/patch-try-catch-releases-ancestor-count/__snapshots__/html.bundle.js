// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<b> </b>",
	a2: "a2;D ;<s> </s>",
	a3: "a3,<i>loading</i>",
	a4: "a4;D ;<b> </b>",
	a5: "a5;b%;<!><!><!>",
	a6: "a6;D ;<em> </em>",
	a7: "a7;b%b%;<!><!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 1), $cg__input_b = _client_guard($scope0_reason, 2), $wi__input_a__OR__input_b = _write_if($scope0_reason, 0);
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
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_a ? "a8" : "a9");
			$wi__input_a && _subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_a && "a9", 0);
			$wi__input_a && _resume_branch($scope2_id);
		}, void 0, (err) => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html(`<s>${_patch_text($scope4_id, "a", err.message)}</s>`);
			_scope($scope4_id, {});
		}, void 0, "a2", "a5", 1, 1, 1);
		_await($scope1_id, "b", input.b, (b) => {
			const $scope6_id = _scope_id();
			_html(`<em>${_patch_text($scope6_id, "a", b, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope6_id, {});
		}, 1, "a0", 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_b ? "a10" : "a11");
		$wi__input_a__OR__input_b && _subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_b && "a11", 0);
		$wi__input_a__OR__input_b && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a3", void 0, "a7", 1, void 0, 2);
	_html("</main>");
	_scope($scope0_id, {
		f: $wi__input_a && _unfilled_if($scope0_reason, 1) && $input_a__closures,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_b__closures
	});
}, 1);
