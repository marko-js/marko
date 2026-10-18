// template.marko
function boom(error) {
	throw error;
}
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a;b%;<!><!><!>",
	a1: "a1;D ;<b> </b>",
	a2: "a2;D ;<i> </i>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html(`<p>${_patch_text($scope4_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope4_id, "a5");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope4_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a5");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wg__err_status = _write_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		_if(() => {
			if (err.status === 404) {
				const $scope2_id = _scope_id();
				_html(`<b>${_patch_text($scope2_id, "a", input.label, void 0, $scope0_reason, 0)}</b>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "a3");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a3");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(`<i>${_patch_text($scope3_id, "a", input.label, void 0, $scope0_reason, 0)}</i>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, "a4");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					Cf: $wi__input_label && 1
				}), "a4");
				return 1;
			}
		}, $scope1_id, "a", 1, $wg__err_status, void 0, void 0, void 0, ["a1", "a2"]);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, "a6", "a0", 1, "");
	$scope0_page ? _scope($scope0_id, {
		d: input.label,
		f: $wi__input_label && $input_label__closures,
		g: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 0));
}, 1);
