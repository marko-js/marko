// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1,<i>loading</i>",
	a2: "a2;D ;<p> </p>",
	a3: "a3;D ;<b> </b>",
	a4: "a4;D ;<em> </em>",
	a5: "a5;D ;<span> </span>",
	a6: "a6;b%;<!><!><!>",
	a7: "a7;D ;<p> </p>",
	a8: "a8;b%b%;<!><!><!><!>",
	a9: "a9;D ;<b> </b>",
	a10: "a10;b%;<!><!><!>",
	a11: "a11;b%b%;<!><!><!><!>",
	a: "a;D%b%;<main><!><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 2), $cg__input_d = _client_guard($scope0_reason, 5), $wi__input_d = _write_if($scope0_reason, 5), $cg__input_c = _client_guard($scope0_reason, 4), $wi__input_c__OR__input_d = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_d__closures = /* @__PURE__ */ new Set();
	const $input_c__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.a, (v) => {
			const $scope5_id = _scope_id();
			_html(`<b>${_text_resume($scope5_id, "a", v, 1, $scope0_reason, 2)}</b>`);
			_scope($scope5_id, {});
		}, 1, "a3", _unfilled_if($scope0_reason, 2) && 2, 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, $cg__input_a ? "a12" : "a13");
		$wi__input_a && _subscribe(_unfilled_if($scope0_reason, 2) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_a && "a13", 0);
		$wi__input_a && _resume_branch($scope1_id);
	}, void 0, (err) => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<em>${_text_resume($scope4_id, "a", err.message, 1, 4, 0)}</em>`);
		_scope($scope4_id, {});
	}, 0, "a4", "a10", 1, 1, 1);
	_await($scope0_id, "b", input.x, (x) => {
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.c, (c) => {
			const $scope6_id = _scope_id();
			_html(`<p>${_text_resume($scope6_id, "a", c, 1, $scope0_reason, 4)}</p>`);
			_scope($scope6_id, {});
		}, 1, "a2", _unfilled_if($scope0_reason, 4) && 2, 1);
		_try($scope2_id, "b", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", input.d, (d) => {
				const $scope8_id = _scope_id();
				_html(`<span>${_text_resume($scope8_id, "a", d, 1, $scope0_reason, 5)}</span>`);
				_scope($scope8_id, {});
			}, 1, "a0", _unfilled_if($scope0_reason, 5) && 2, 1);
			_unfilled_if($scope0_reason, 5) && _patch_init($scope3_id, $cg__input_d ? "a14" : "a15");
			$wi__input_d && _subscribe(_unfilled_if($scope0_reason, 5) && $input_d__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__input_d && "a15", 0);
			$wi__input_d && _resume_branch($scope3_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("<i>loading</i>");
		}, void 0, "a1", void 0, "a6", 1, 0, 2);
		_unfilled_if($scope0_reason, 4) && _patch_init($scope2_id, $cg__input_c ? "a16" : "a17");
		$wi__input_c__OR__input_d && _subscribe(_unfilled_if($scope0_reason, 4) && $input_c__closures, _scope($scope2_id, {}), $cg__input_c && "a17", 0);
		$wi__input_c__OR__input_d && _resume_branch($scope2_id);
	}, 1, "a8", _unfilled_if($scope0_reason, 3), 1);
	_html("</main>");
	_scope($scope0_id, {
		i: $wi__input_a && _unfilled_if($scope0_reason, 2) && $input_a__closures,
		k: $wi__input_d && _unfilled_if($scope0_reason, 5) && $input_d__closures,
		j: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_c__closures
	});
}, 1);
