// template.marko
function boom(error) {
	throw error;
}
_shells({
	a6: "a6",
	a2: "a2",
	a7: "a7;D ;<p> </p>",
	a3: "a3;D ;<p> </p>",
	a: "a !a8;D%b%b D ;<main><!><!><button> </button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_error__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_error ? "a0" : "a1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope1_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "a1");
	}, void 0, (err) => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "a", err, 1, 4, 0)}</b>`);
		_scope($scope3_id, {});
	}, 0, "a2", "a3", 1, 1, 1);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_error ? "a4" : "a5");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_error__closures, _scope($scope2_id, {
			_: $wi__input_error && _scope_with_id($scope0_id),
			Ci: $wi__input_error && 1
		}), $cg__input_error && "a5");
	}, void 0, (err) => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<i>${_text_resume($scope4_id, "a", err.message, 1, 4, 0)}</i>`);
		_scope($scope4_id, {});
	}, 0, "a6", "a7", 1, 1, 1);
	_html(`<button>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		h: count,
		i: $wi__input_error && _unfilled_if($scope0_reason, 0) && $input_error__closures
	});
}, 1);
