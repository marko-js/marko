// template.marko
function boom(error) {
	throw error;
}
_shells({
	a4: "a4;D ;<p> </p>",
	a5: "a5 a7",
	a: "a !a10;D%b D ;<main><!><button> </button></main>",
	a3: "a3 a2!a0;D ;<i> </i>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_detail = _write_if($scope0_reason, 0), $cg__input_detail = _client_guard($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_detail__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_patch_text($scope3_id, "a", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_error ? "a8" : "a9");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope3_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "a9");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "a", err.message)}</b>`);
		_if(() => {
			if (input.detail) {
				const $scope2_id = _scope_id();
				_html(`<i>${_patch_text($scope2_id, "a", input.detail, void 0, $scope0_reason, 0)}</i>`);
				_script($scope2_id, "a0");
				$cg__input_detail && _patch_init($scope2_id, "a1");
				_subscribe($wi__input_detail && $input_detail__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ci: $wi__input_detail && 1
				}), "a2");
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a3"], $scope0_reason, 0);
		$cg__input_detail && _patch_init($scope1_id, "a6");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_detail__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a7");
	}, void 0, "a5", "a4", 1, 1, 1);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a10");
	_scope($scope0_id, {
		f: input.detail,
		h: count,
		i: $wi__input_detail && $input_detail__closures,
		j: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va11", input.detail, !_server_guard($scope0_reason, 0));
}, 1);
