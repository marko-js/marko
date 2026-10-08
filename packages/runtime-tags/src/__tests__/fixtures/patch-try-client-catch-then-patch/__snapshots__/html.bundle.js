// template.marko
_shells({
	a0: "a0 a8;D%b%;<em><!><!></em>",
	a: "a !a5;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", input.message, void 0, $scope0_reason, 0)}${_text_resume($scope1_id, "b", "", 2)}</em>`);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a1");
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a2"), "a3");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _source_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "a", err.message, $wg__err_message)}</b>`);
		_source_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a4", "a0", void 0, 1);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a5");
	_patch_value($scope0_id, "a6", count, 1);
	$scope0_page && _scope($scope0_id, {
		g: count,
		h: _unfilled_if($scope0_reason, 0) && $input_message__closures,
		i: $count__closures
	});
}, 1);
