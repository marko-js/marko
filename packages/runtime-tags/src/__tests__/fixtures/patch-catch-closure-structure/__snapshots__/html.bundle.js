// template.marko
function boom(error) {
	throw error;
}
_shells({
	a3: "a3;D ;<p> </p>",
	a4: "a4",
	a: "a !a7;D%b D ;<main><!><button> </button></main>",
	a2: "a2 !a0;D ;<i> </i>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_detail = _client_guard($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_detail = _write_if($scope0_reason, 0), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_detail__closures = /* @__PURE__ */ new Set();
	const $input_error__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_text_mark($scope3_id, "a", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "a6", $cg__input_error);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope3_id, { _: $wi__input_error && _scope_with_id($scope0_id) }), $cg__input_error && "a6");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "a", err.message, 1, 4, 0)}</b>`);
		_if(() => {
			if (input.detail) {
				const $scope2_id = _scope_id();
				_html(`<i>${_text_mark($scope2_id, "a", input.detail, 1, $scope0_reason, 0)}</i>`);
				_script($scope2_id, "a0");
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a1", $cg__input_detail);
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_detail__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ci: $wi__input_detail && 1
				}), $cg__input_detail && "a1");
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a5", $cg__input_detail);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_detail__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_detail && "a5");
	}, 0, "a4", "a3", 1, 1);
	_html(`<button>${_text_mark($scope0_id, "c", count)}</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		f: input.detail,
		h: count,
		i: $wi__input_detail && $input_detail__closures,
		j: $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.detail, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a8", "f");
}, 1);
