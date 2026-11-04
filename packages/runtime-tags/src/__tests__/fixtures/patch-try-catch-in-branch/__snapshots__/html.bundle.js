// template.marko
function boom() {
	throw new Error("boom");
}
_shells({
	a2: "a2;D ;<b> </b>",
	a3: "a3;D%b%;<em><!><!></em>",
	a: "a; ;<main></main>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 1), $cg__input_message = _client_guard($scope0_reason, 2), $cg__input_boom = _client_guard($scope0_reason, 3), $wi__input_show__OR__input_message__OR__input_boom = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_message = _unfilled_if($scope0_reason, 2), $ui__input_boom = _unfilled_if($scope0_reason, 3), $fg__input_message = _filled_guard($scope0_reason, 2), $fg__input_boom = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
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
				_html(`<em>${_text_mark($scope2_id, "a", input.message, 1, $scope0_reason, 2)}${_text_mark($scope2_id, "b", input.boom ? boom() : "", 2, $scope0_reason, 3)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a0", $cg__input_message);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a1", $cg__input_boom);
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_message__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_message__OR__input_boom && _scope_with_id($scope1_id) }), $cg__input_message && "a0"), $cg__input_boom && "a1");
			}, void 0, (err) => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html(`<b>${_text_mark($scope3_id, "a", err.message, 1, 4, 0)}</b>`);
				_scope($scope3_id, {});
			}, 0, "a2", "a3", 0, 1, 1);
			$wi__input_show__OR__input_message__OR__input_boom && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_message && $cg__input_show && _patch_subscribers($scope0_id, "a5", "e");
	$fg__input_boom && $cg__input_show && _patch_subscribers($scope0_id, "a6", "f");
	_scope($scope0_id, {
		e: ($ui__input_show || $ui__input_message) && input.message,
		f: ($ui__input_show || $ui__input_boom) && input.boom,
		g: _write_if($scope0_reason, 2) && ($ui__input_message || $ui__input_show) && $input_message__closures,
		h: _write_if($scope0_reason, 3) && ($ui__input_boom || $ui__input_show) && $input_boom__closures
	}) || ($fg__input_message && $ui__input_show && _patch_write($scope0_id, "xe", input.message, !_server_guard($scope0_reason, 2)), $fg__input_boom && $ui__input_show && _patch_write($scope0_id, "xf", input.boom, !_server_guard($scope0_reason, 3)));
}, 1);
