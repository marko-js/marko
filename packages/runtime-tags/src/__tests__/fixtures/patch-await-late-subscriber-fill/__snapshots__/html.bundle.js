// template.marko
_shells({
	a0: "a0 a12 a13;D ;<div id=done> </div>",
	a1: "a1 a12 a13;D ;<div id=done> </div>",
	a2: "a2;b%;<!><!><!>",
	a: "a !a8; D l%;<button> </button><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
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
			_subscribe($n__closures, _subscribe(_source_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a3"), "a4");
		}, 1, "a0", 1);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a5");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a6", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a7", void 0, "a2", 1);
	_script($scope0_id, "a8");
	_patch_value($scope0_id, "a10", n, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.label,
		h: n,
		j: $input_label__closures,
		k: $n__closures,
		i: _unfilled_if($scope0_reason, 0) && $input_promise__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "a9", input.label);
}, 1);
