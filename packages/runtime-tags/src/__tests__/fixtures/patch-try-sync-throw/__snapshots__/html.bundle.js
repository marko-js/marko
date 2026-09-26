// template.marko
function boom() {
	throw new Error("boom");
}
_shells({
	a0: "a0;D%b%;<em><!><!></em>",
	a: "a !a4;D%b D ;<main><!><button> </button></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	const $input_boom__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.message, void 0, $scope0_reason, 1)}${_patch_text($scope1_id, "b", input.boom ? boom() : "", 2, $scope0_reason, 2)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a2"), _client_guard($scope0_reason, 2) && "a3");
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a1", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _source_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "a", err.message, $sg__err_message)}</b>`);
		_source_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) }) }, 1);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$scope0_page && _scope($scope0_id, {
		h: count,
		i: $input_message__closures,
		j: $input_boom__closures
	});
}, 1, 0);
