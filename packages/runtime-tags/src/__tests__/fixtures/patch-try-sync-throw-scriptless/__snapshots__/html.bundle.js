// template.marko
function boom() {
	throw new Error("boom");
}
_shells({ a0: "a0;D%b%;<em><!><!></em>" });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	const $input_boom__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.message, void 0, $scope0_reason, 1)}${_patch_text($scope1_id, "b", input.boom ? boom() : "", 2, $scope0_reason, 2)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id), { catch: attrTag({ content: _content_elide("a1", (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _source_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`<b>${_text_resume($scope2_id, "a", err.message, $sg__err_message)}</b>`);
		_source_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		f: $input_message__closures,
		g: $input_boom__closures
	});
}, 1, 0);
