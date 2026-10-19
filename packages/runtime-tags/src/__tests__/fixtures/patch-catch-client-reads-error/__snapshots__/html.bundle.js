// template.marko
function boom(error) {
	throw error;
}
_shells({
	a0: "a0;D ;<p> </p>",
	a1: "a1;D ;<p> </p>",
	a: "a;D%b%;<main><!><!></main>"
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
		const $scope3_id = _scope_id();
		_patch_write($scope3_id, "we", err?.message);
		_html(`<b>${_patch_text($scope3_id, "a", err.message)}</b><button>log</button>${_el_resume($scope3_id, "b")}`);
		_script($scope3_id, "a2");
		_scope($scope3_id, { e: err?.message });
	}, void 0, "a4", "a1", 1, 2);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "a6");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope2_id, {
			_: $wi__input_error && _scope_with_id($scope0_id),
			Cf: $wi__input_error && 1
		}), _client_guard($scope0_reason, 0) && "a6");
	}, void 0, (err) => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_patch_write($scope4_id, "wd", err?.cause?.code);
		_script($scope4_id, "a5", 0, 1);
		_patch_effect($scope4_id, "ea5", "d");
		_scope($scope4_id, { d: err?.cause?.code });
	}, void 0, "a7", "a0", 1, 2);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { f: $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures });
}, 1);
