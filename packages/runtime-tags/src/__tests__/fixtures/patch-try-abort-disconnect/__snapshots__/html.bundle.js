// template.marko
_shells({
	a0: "a0;Db%;<p>A:<!></p>",
	a1: "a1",
	a2: "a2",
	a3: "a3;Db%;<p>A:<!></p>",
	a4: "a4;b%;<!><!><!>",
	a: "a !a7; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.a, (v) => {
			const $scope4_id = _scope_id();
			_html(`<p>A:${_text_resume($scope4_id, "a", v, 2, $scope0_reason, 0)}</p>`);
			_scope($scope4_id, {});
		}, 1, "a0", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_a ? "a5" : "a6");
		$wi__input_a && _subscribe(_unfilled_if($scope0_reason, 0) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_a && "a6", 0);
		$wi__input_a && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>wait</em>");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("caught-a");
	}, "a2", "a1", "a4", 1, void 0, 3);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		g: n,
		h: $wi__input_a && _unfilled_if($scope0_reason, 0) && $input_a__closures
	});
}, 1);
