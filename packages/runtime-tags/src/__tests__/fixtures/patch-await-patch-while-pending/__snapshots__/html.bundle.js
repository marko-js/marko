// template.marko
_shells({
	a0: "a0;D%;<div id=done><!> done</div>",
	a1: "a1;D%;<div id=done><!> done</div>",
	a2: "a2;b%;<!><!><!>",
	a: "a !a8; D l%;<button> </button><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, () => {
			const $scope2_id = _scope_id();
			_html(`<div id=done>${_patch_text($scope2_id, "a", input.msg, void 0, $scope0_reason, 2)} done</div>`);
			_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a3");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "a4");
		}, 1, "a0", 1);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a5");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a6", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a7", void 0, "a2", 1);
	_script($scope0_id, "a8");
	$scope0_page && _scope($scope0_id, {
		g: _unfilled_if($scope0_reason, 1) && input.msg,
		h: count,
		j: _unfilled_if($scope0_reason, 2) && $input_msg__closures,
		i: _unfilled_if($scope0_reason, 1) && $input_promise__closures
	});
}, 1, 0);
