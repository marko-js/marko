// template.marko
function boom(error) {
	throw error;
}
_shells({
	a8: "a8 !a5",
	a3: "a3 !a0",
	a9: "a9;D ;<p> </p>",
	a4: "a4;D ;<p> </p>",
	a: "a;D%b%;<main><!><!></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_error__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_error ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope1_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "a2");
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_patch_write($scope3_id, "we", err?.message);
		_html(`<b>${_text_resume($scope3_id, "a", err.message, 1, 4, 0)}</b><button>log</button>${_el_resume($scope3_id, "b")}`);
		_script($scope3_id, "a0");
		_scope($scope3_id, { e: err?.message });
	}, 0, "a3", "a4", 1, 1, 1);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_error ? "a6" : "a7");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope2_id, {
			_: $wi__input_error && _scope_with_id($scope0_id),
			Cf: $wi__input_error && 1
		}), $cg__input_error && "a7");
	}, void 0, (err) => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_patch_write($scope4_id, "wd", err?.cause?.code);
		_script($scope4_id, "a5", 0);
		_scope($scope4_id, { d: err?.cause?.code });
	}, 0, "a8", "a9", 1, 1, 1);
	_html("</main>");
	_scope($scope0_id, { f: $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures });
}, 1);
