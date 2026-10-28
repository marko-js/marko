// template.marko
_shells({
	a2: "a2,<em>bad</em>",
	a3: "a3;D ;<em> </em>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_message = _client_guard($scope0_reason, 0), $wi__input_message = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.message, 1, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_message ? "a0" : "a1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_message__closures, _scope($scope1_id, { _: $wi__input_message && _scope_with_id($scope0_id) }), $cg__input_message && "a1");
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("<em>bad</em>");
	}, void 0, "a2", "a3", 1, void 0, 1);
	_html("</main>");
	_scope($scope0_id, { e: $wi__input_message && _unfilled_if($scope0_reason, 0) && $input_message__closures });
}, 1);
