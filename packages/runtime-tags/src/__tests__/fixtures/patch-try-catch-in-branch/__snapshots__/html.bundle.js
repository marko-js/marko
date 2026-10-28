// template.marko
function boom() {
	throw new Error("boom");
}
_shells({
	a4: "a4;D ;<b> </b>",
	a5: "a5;D%b%;<em><!><!></em>",
	a: "a !; ;<main></main>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_message = _client_guard($scope0_reason, 2), $cg__input_boom = _client_guard($scope0_reason, 3), $wi__input_show__OR__input_message__OR__input_boom = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_message__closures = /* @__PURE__ */ new Set();
	const $input_boom__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", input.message, 1, $scope0_reason, 2)}${_text_resume($scope2_id, "b", input.boom ? boom() : "", 2, $scope0_reason, 3)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_message ? "a0" : "a1");
				_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_boom ? "a2" : "a3");
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_message__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_message__OR__input_boom && _scope_with_id($scope1_id) }), $cg__input_message && "a1"), $cg__input_boom && "a3");
			}, void 0, (err) => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "a", err.message, 1, 4, 0)}</b>`);
				_scope($scope3_id, {});
			}, 0, "a4", "a5", 0, 1, 1);
			$wi__input_show__OR__input_message__OR__input_boom && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a6"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.message,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.boom,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_message__closures,
		h: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_boom__closures
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va7", input.message, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va8", input.boom, !_server_guard($scope0_reason, 3)));
}, 1);
