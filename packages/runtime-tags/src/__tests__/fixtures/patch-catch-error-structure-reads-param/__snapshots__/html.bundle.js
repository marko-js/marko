// template.marko
function boom(error) {
	throw error;
}
_shells({
	a5: "a5;D ;<p> </p>",
	a6: "a6",
	a: "a !;b%;<!><!><!>",
	a4: "a4;D ;<b> </b>",
	a7: "a7;D ;<i> </i>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<p>${_text_resume($scope4_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope4_id, $cg__input_error ? "a8" : "a9");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope4_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "a9");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wg__err_status = _write_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		_if(() => {
			if (err.status === 404) {
				const $scope2_id = _scope_id();
				_html(`<b>${_text_resume($scope2_id, "a", input.label, 1, $scope0_reason, 0)}</b>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_label ? "a0" : "a1");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(`<i>${_text_resume($scope3_id, "a", input.label, 1, $scope0_reason, 0)}</i>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_label ? "a2" : "a3");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					Cf: $wi__input_label && 1
				}), "a3");
				return 1;
			}
		}, $scope1_id, "a", 1, $wg__err_status, void 0, void 0, void 0, ["a4", "a7"]);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, "a6", "a5", 1, 1, 1);
	_scope($scope0_id, {
		d: input.label,
		f: $wi__input_label && $input_label__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va10", input.label, !_server_guard($scope0_reason, 0));
}, 1);
