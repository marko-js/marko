// template.marko
_shells({
	a0: "a0,<em>bad</em>",
	a1: "a1;D ;<em> </em>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.message, void 0, $scope0_reason, 0)}</em>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), { catch: attrTag({ content: _content_shell("a0", $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { e: $input_message__closures });
}, 1, 0);
