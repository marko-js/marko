// template.marko
_shells({
	a0: "a0;Db%;<p>A:<!></p>",
	a1: "a1;Db%;<p>A:<!></p>",
	a2: "a2;b%;<!><!><!>",
	a: "a !a6; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_a = _unfilled_if($scope0_reason, 0);
		_await($scope1_id, "a", input.a, (v) => {
			const $scope4_id = _scope_id();
			_html(`<p>A:${_text_mark($scope4_id, "a", v, 2, $scope0_reason, 0)}</p>`);
			_scope($scope4_id, {});
		}, 1, "a0", $ui__input_a && 2, 1);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a3", 1);
		$wi__input_a && _subscribe($ui__input_a && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a3", 0);
		$wi__input_a && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>wait</em>");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("caught-a");
	}, "a4", "a5", "a2", 1);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		g: n,
		h: $wi__input_a && _unfilled_if($scope0_reason, 0) && $input_a__closures
	});
}, 1);
