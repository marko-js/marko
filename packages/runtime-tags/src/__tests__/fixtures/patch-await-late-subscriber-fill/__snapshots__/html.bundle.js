// template.marko
_shells({
	a3: "a3",
	a4: "a4 a2;D ;<div id=done> </div>",
	a5: "a5 a2;D ;<div id=done> </div>",
	a6: "a6;b%;<!><!><!>",
	a: "a !a8; D l%;<button> </button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<div id=done>${_text_mark($scope2_id, "a", input.label + n)}</div>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a0");
			_patch_render($scope2_id, "a1", _filled_guard($scope0_reason, 1) && ">>g");
			_subscribe($n__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {}), _client_guard($scope0_reason, 1) && "a0"), "a2");
		}, 1, "a4", _unfilled_if($scope0_reason, 0) && 3, 1);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a7", $cg__input_promise);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_promise && "a7", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a3", void 0, "a6", 1, 0, 2);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		g: input.label,
		h: n,
		j: $wi__input_label && $input_label__closures,
		k: $n__closures,
		i: _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 1));
}, 1);
