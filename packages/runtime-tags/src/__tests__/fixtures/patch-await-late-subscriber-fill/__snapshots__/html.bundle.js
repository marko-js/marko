// template.marko
_shells({
	a2: "a2",
	a3: "a3 a0 a12 a13;D ;<div id=done> </div>",
	a4: "a4 a0 a12 a13;D ;<div id=done> </div>",
	a5: "a5;b%;<!><!><!>",
	a: "a !a8; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<div id=done>${_text_resume($scope2_id, "a", input.label + n)}</div>`);
			$scope0_page && _subscribe($n__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0"), "a1");
		}, 1, "a3", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "a6" : "a7");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a7", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a2", void 0, "a5", 1, void 0, 2);
	_script($scope0_id, "a8");
	$scope0_page ? _scope($scope0_id, {
		g: input.label,
		h: n,
		j: $wi__input_label && $input_label__closures,
		k: $n__closures,
		i: _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va9", input.label, !_server_guard($scope0_reason, 1));
}, 1);
