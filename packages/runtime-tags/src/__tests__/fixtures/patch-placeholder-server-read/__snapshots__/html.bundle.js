// template.marko
_shells({
	a1: "a1,<div id=done>done</div>",
	a2: "a2,<div id=done>done</div>",
	a3: "a3;b%;<!><!><!>",
	a: "a !a7; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_msg = _write_guard($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.promise, () => {
			_scope_id();
			_html("<div id=done>done</div>");
		}, 1, "a1");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_promise ? "a4" : "a5");
		$scope0_page && $wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a5", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<em>loading ${_text_resume($scope1_id, "a", input.msg, $wg__input_msg * 2)}</em>`);
		$scope1_page && _subscribe($wi__input_msg && $input_msg__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_msg);
		$wg__input_msg || _resume_branch($scope1_id);
	}, void 0, "a6", void 0, "a3", 1);
	_script($scope0_id, "a7");
	$scope0_page ? _scope($scope0_id, {
		f: input.msg,
		h: count,
		i: $wi__input_msg && $input_msg__closures,
		j: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va8", input.msg, !_server_guard($scope0_reason, 0));
}, 1);
