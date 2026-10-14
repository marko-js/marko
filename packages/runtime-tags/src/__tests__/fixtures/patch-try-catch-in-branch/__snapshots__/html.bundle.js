// template.marko
function boom() {
	throw new Error("boom");
}
_shells({
	a0: "a0;D%b%;<em><!><!></em>",
	a: "a !; ;<main></main>",
	a1: "a1;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_message__OR__input_boom = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
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
				_html(`<em>${_patch_text($scope2_id, "a", input.message, void 0, $scope0_reason, 2)}${_patch_text($scope2_id, "b", input.boom ? boom() : "", 2, $scope0_reason, 3)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "a2");
				_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "a3");
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_message__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_message__OR__input_boom && _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "a4"), _client_guard($scope0_reason, 3) && "a5");
			}, void 0, (err) => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<b>${_patch_text($scope3_id, "a", err.message)}</b>`);
				_scope($scope3_id, {});
			}, void 0, "a6", "a0", void 0, "");
			$wi__input_show__OR__input_message__OR__input_boom && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 1) && input.message,
		f: _unfilled_if($scope0_reason, 1) && input.boom,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_message__closures,
		h: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_boom__closures
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va7", input.message), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va8", input.boom));
}, 1);
