// template.marko
function boom(error) {
	throw error;
}
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_error = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_error__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "a3");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope1_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a3");
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		let shown = err.message;
		_html(`<button>${_text_resume($scope2_id, "b", shown)}</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a1");
		_patch_value($scope2_id, "va2", shown, 1);
		_scope($scope2_id, { f: shown });
	}, void 0, "a4", "a0", 1, 2);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { e: $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures });
}, 1);
